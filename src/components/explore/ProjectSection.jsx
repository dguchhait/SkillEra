import "./projectSection.css";
function projectSection() {
  const projectSectionData = [
    {
      title: "GeneAi - An Alexa Like Assistant",
      image: "/assets/alexa.jpg",
      description:
        "A customized alexa like assistant with chat and voice command compatibilities. Useful for day-to-day tasks like web searching, knowledge extraction from documents or music recommendation.",
    },
    {
      title: "Named Entity Recognition",
      image: "/assets/alexa.jpg",
      description:
        "Utilizing Transformer models, NER project accurately identifies and extracts named entities from text.",
    },
    {
      title: "Customised Chat Bot",
      image: "/assets/alexa.jpg",
      description:
        "Customised chatbot with langchain and Chainlit to generate a Question Answering system or RAG system that extracts information from various sources of documents or simple web searching.",
    },
    {
      title: "On Prompt Image & Caption Generator",
      image: "/assets/alexa.jpg",
      description:
        "Aiming at image generation and caption generation, this project helps the user to generate contents or topics and thumbnails with ease.",
    },
  ];
  return (
    <>
      <div className="container projects-section">
        <div className="row">
          <div className="col-12 mb-3">
            <h2>Real-World Projects: Apply What You Learn</h2>
          </div>
        </div>

        <div className="row">
          {projectSectionData.map((data, i) => (
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
              <div className="card text-center">
                <img src={data.image} className="card-img-top" alt="GeneAi" />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default projectSection;
