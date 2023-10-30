import { NextResponse } from "next/server";
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dsrdos5pb',
    api_key: '126311844268791',
    api_secret: 'C05y_63lwSiW2-kGGYE7CvFwd-o'
});

export async function POST(request): Promise<NextResponse> {
    const data = await request.formData();

    const image = data.get('file');

    if (!image) {
        return NextResponse.json("no hay imagen", { status: 403 });
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const response: Promise<UploadApiResponse> = new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (err, result) => {
            if (err) { reject(err) }
            resolve(result);
        }).end(buffer)
    })

    return NextResponse.json({ message: "imagen subida", url: (await response).secure_url, })
}