import { Link } from 'react-router-dom';

function Blog() {   
    const blogPosts = [
        {
            id: 1,
            title: 'No RISC, no fun (:',
            description: './A for ARM (vs x86), Apple silicon and A64FX.out',
            link: '#',
        },
        {
            id: 2,
            title: 'Curating organized git history',
            description: 'Automating commit patterns back in time.',
            link: '#',
        },
        {
            id: 3,
            title: 'Another Blog Post',
            description: 'This is a description for another post.',
            link: '#',
        },
     
    ];

    return (
        <div>
         
            <div
                className="bg-fixed h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/img/aa.jpg')" }}
            >
               
                <div className="flex justify-center items-center h-full py-10">
                    
                    <div className="max-w-2xl w-full rounded-lg shadow-lg bg-white p-8 h-[500px] overflow-y-auto">
                
                        <div className="flex justify-center mb-4">
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                            </Link>
                        </div>

                    
                        <h3 className="text-3xl font-bold text-center mb-4">Writings</h3>
                        <p className="text-gray-700 text-lg text-center mb-8">Welcome to my blog section</p>

                       
                        <div>
                            {blogPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="bg-gray-100 rounded-lg shadow-md mb-4 p-4"
                                >
                                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                    <p className="text-gray-600 mb-2">{post.description}</p>
                                    <a
                                        href={post.link}
                                        className="inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        Read More
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
