import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm( {_id, title:existingTitle, description:existingDescription, price:existingPrice, images:existingImages} ) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [images, setImages] = useState(existingImages || []);

    const [goToProducts, setGoToProducts] = useState(false);
    const [isUploading, setIsUploading] = useState(false)
    const router = useRouter();

    async function saveProduct(e) {
        e.preventDefault()
        const data = {title, description, price, images};
        if (_id) {
            //update
            await axios.put('/api/products', {...data, _id});
        } else {
            //create
            await axios.post('/api/products', data);
        }
        setGoToProducts(true);
    }

    if (goToProducts) {
        router.push('/products')
    }

    async function uploadImages(e) {
        const files = e.target?.files;
        if (files?.length > 0) {
            setIsUploading(true);
            const data = new FormData();
            for (const file of files) {
                data.append('file', file);
            }
            const res = await axios.post('/api/upload', data);
            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            });
            setIsUploading(false)
        }
    }

    function updateImagesOrder(images) {
        setImages(images)
    }

    return (
        <form onSubmit={saveProduct}>

            <label>Product name</label>
            <input 
                type="text" 
                placeholder="product name" 
                required 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />

            <label>Photos</label>
            <div className="mb-2 flex flex-wrap gap-2">
                <ReactSortable className="mb-2 flex flex-wrap gap-2" list={images} setList={updateImagesOrder}>
                    {!!images?.length && images.map(link => (
                        <div key={link} className="h-32">
                            <img className="rounded-lg cursor-pointer" src={link} alt=""/>
                        </div>
                    ))}
                </ReactSortable>
                {isUploading && (
                    <div className="h-32 p-1 flex items-center rounded-lg">
                        <Spinner/>
                    </div>
                )}
                <label className="cursor-pointer w-32 h-32 flex flex-col justify-center items-center gap-1 text-gray-500 rounded-lg bg-gray-200"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    Upload
                    <input onChange={uploadImages} type="file" className="hidden"/>
                </label>
            </div>

            <label>Description</label>
            <textarea 
                placeholder="description" 
                required 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>Price (in USD)</label>
            <input 
                type="number" 
                placeholder="price" 
                required 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
            />

            <button type="submit" className="btn-primary">Save</button>
        </form>
    )
}