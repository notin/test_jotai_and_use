// @ts-ignore
import { experimental_use as use, Suspense, useState, useEffect } from "react";
import Detail from "./Details";

const idsFetch = fetch("/ids.json").then(async (res) => ({
    status: res.status,
    data: res.status === 200 ? await res.json() : null,
}));
const Names = () => {
    const ids = use(idsFetch);

    console.log(`Rendering names ${ids.data}`);

    return (
        <div>
            {ids?.data.map((id) => (
                <Detail key={id} id={id} />
            ))}
        </div>
    );
};
export default Names;
