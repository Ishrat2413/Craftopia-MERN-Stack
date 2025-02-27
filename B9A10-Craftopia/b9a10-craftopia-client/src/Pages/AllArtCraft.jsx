import { useLoaderData } from "react-router-dom";
import ArtsCraftCards from "./ArtsCraftCards";

const AllArtCraft = () => {

    const allArtCraft = useLoaderData()
    return (
        <div>
            <h2 className="text-3xl font-bold font-serif text-center m-7 underline">All Art & Crafts Here</h2>
            <div className='grid md:grid-cols-3 gap-4 mt-10'>
                {
                    allArtCraft.map(all => <ArtsCraftCards
                        key={all._id}
                        all={all}>

                    </ArtsCraftCards>)
                }
            </div>
        </div>
    );
};

export default AllArtCraft;