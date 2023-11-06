import { NextResponse } from "next/server";
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dsrdos5pb',
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

export async function POST(request): Promise<NextResponse> {
    const data = await request.formData();
    const image = data.get('file');

    if (!image) {
        return NextResponse.json("no hay imagen", { status: 403 });
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    return new Promise<NextResponse>(async (resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (err, result) => {
            if (err || !result) {
                reject(err || "Error al subir la imagen");
            } else {
                resolve(NextResponse.json({ message: "imagen subida", url: result.secure_url }));
            }
        }).end(buffer);
    });
}