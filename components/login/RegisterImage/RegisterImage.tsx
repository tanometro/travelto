'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
type Props = {
    imageUser: string;
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function RegisterImage({ imageUser, handler }: Props): React.ReactNode {
    const [file, setFile] = useState<File | null>(null);
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handler(event);
        setInputValue(event.target?.value);
    };

    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        handleInputChange(data.url);
    }
    return (
        <div className="flex relative h-80 w-80 aligne-center justify-center">
            <Image src={imageUser} alt="Foto usuario"
                fill
                className="absolute overflow-hidden object-cover rounded-full" />
            <form onSubmit={handlerSubmit} className="flex flex-col relative justify-end">
                <input name="image" className="bg-white" type="file" onChange={(event) => {
                    setFile(event.target.files[0]);
                }} />
                <button className="text-white flex bg-black ">Subir imagen</button>
            </form>
        </div>
    )
}