'use client'
import Image from "next/image";
import { useState } from "react";

type Props = {
    imageUser: string;
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function RegisterImage({ imageUser, handler }: Props): React.ReactNode {
    const [file, setFile] = useState<File | null>(null);
    const [inputValue, setInputValue] = useState("");

    const handlerClose = () => {
        setInputValue("");
        setFile(null);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handler(event);
        setInputValue(event.target?.value);
    };

    const handlerFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
        if (selectedFile) {
            setInputValue(URL.createObjectURL(selectedFile));
        }
    };

    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            handleInputChange({ target: { value: data.url } } as React.ChangeEvent<HTMLInputElement>);
        } else {
            console.error("No se seleccionó ningún archivo.");
        }
    };

    return (
        <div className="flex relative h-80 w-80 aligne-center justify-center">
            <div className="flex pl-2 justify-end" onClick={handlerClose}>
                <button className="flex absolute rounded-full justify-center items-center text-white bg-red-500 w-10 h-10 "> X </button>
            </div>
            <Image src={inputValue === "" ? imageUser : inputValue} alt="Foto usuario"
                fill
                className="absolute overflow-hidden object-cover rounded-full" />
            <form onSubmit={handlerSubmit} className="flex flex-col relative justify-end">
                <input name="image" className="bg-white" type="file" onChange={handlerFileChange} />
                <button className="text-white flex bg-black ">Subir imagen</button>
            </form>
        </div>
    );
}