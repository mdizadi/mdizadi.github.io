const Papers = () => {
  const publishedPapers = [
    {
      title: "Banking market structure and trade shocks",
      coAuthors: "with V. Saadi",
      journal: "Journal of Banking & Finance",
      year: "2023",
      volume: "153",
      pages: "106884",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0378426623001085"
    },
    {
      title: "Risk Factors of Collateralized Loan Obligations and Corporate Bonds",
      coAuthors: "with M. Wahrenburg, A. Barth, and A. Rahhal",
      journal: "Zeitschrift für Bankrecht und Bankwirtschaft",
      year: "2020",
      volume: "32(6)",
      pages: "347-355",
      link: "https://doi.org/10.15375/zbb-2020-0604"
    }
  ];

  const workingPapers = [
    {
      title: "Corporate bond issue fragmentation and liquidity",
      coAuthors: "with C. Westheide",
      presentations: "Presented at the University of Graz, and at the German Finance Association (2022) by co-author.",
      link: "https://drive.google.com/file/d/1LqscmRN3f_uKPCxD6VTCcQ4cb4o9n9bO/view?usp=sharing"
    },
    {
      title: "Bond market transparency and firm's financing decisions",
      link: "https://drive.google.com/file/d/1ChZcQzKCfyi7ip2Z3dLXv13uKaHggCKC/view?usp=sharing"
    }
  ];

  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-semibold mb-4">Published Papers</h3>
        <div className="space-y-4">
          {publishedPapers.map((paper, index) => (
            <div key={index} className="text-gray-800">
              <div>
                <a 
                  href={paper.link} 
                  className="text-gray-800 hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {paper.title}
                </a>
                <span>, {paper.coAuthors}</span>
              </div>
              <div className="mt-1">
                <span className="font-semibold">{paper.journal}</span>
                <span>, {paper.year}, {paper.volume}, {paper.pages}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Working Papers</h3>
        <div className="space-y-4">
          {workingPapers.map((paper, index) => (
            <div key={index} className="text-gray-800">
              <a 
                href={paper.link} 
                className="text-gray-800 hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {paper.title}
              </a>
              {paper.coAuthors && <span>, {paper.coAuthors}</span>}
              {paper.presentations && (
                <div className="text-sm text-gray-600 mt-1">
                  {paper.presentations}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Papers;