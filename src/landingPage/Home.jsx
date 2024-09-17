import Card from "./Card";


function Home() {
    return (
        <div>
            <div
                className="bg-fixed h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/img/wass.jpeg')" }}
            >
                <Card />
            </div>
        </div>
    );
}
export default Home;
