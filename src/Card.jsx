import Button from "./Buttons";

function Card() {
    return (
        <div class="flex justify-center pt-40  ">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 ">
                <div className="flex  justify-center ">
                    <div className="  w-32 h-32  rounded-full overflow-hidden flex    ">
                        <img
                            className="justify-center"
                            src="/img/pfp.jpg"
                        />
                    </div>
                </div>
                <br />
                <h3 className="text-xl font-bold mb-2 flex justify-center ">
                    Hi!
                </h3>
                <p className="text-gray-700 text-base  flex justify-center">
                    Welcome to my site !
                </p>

            <Button/>
            </div>
        </div>
    );
}

export default Card;
