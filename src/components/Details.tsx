
// @ts-ignore
import { experimental_use as use, Suspense, useState, useEffect } from "react";
import useCachedFetch from "../hooks/useCachedFetch";

const Detail = ({ id }) => {
    const data = use(useCachedFetch(`/${id}.json`));

    console.log(`Rendering Detail ${id}`);

    function getDetails() {
        return <div>{data.data.name}</div>;
    }

    return getDetails();
};

export default Detail;
