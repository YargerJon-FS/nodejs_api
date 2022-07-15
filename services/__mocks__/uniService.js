
const uniService = async () => {
    console.log('Mocked Todos');
    return Promise.resolve({
        data:[{
            "domains": [
            "marywood.edu"
            ],
            "web_pages": [
            "http://www.marywood.edu"
            ],
            "state-province": null,
            "name": "Marywood University",
            "country": "United States",
            "alpha_two_code": "US"
            },
            {
            "domains": [
            "lindenwood.edu"
            ],
            "web_pages": [
            "http://www.lindenwood.edu/"
            ],
            "state-province": null,
            "name": "Lindenwood University",
            "country": "United States",
            "alpha_two_code": "US"
            },
            {
            "domains": [
            "sullivan.edu"
            ],
            "web_pages": [
            "https://sullivan.edu/"
            ],
            "state-province": null,
            "name": "Sullivan University",
            "country": "United States",
            "alpha_two_code": "US"
            },
            {
            "domains": [
            "fscj.edu"
            ],
            "web_pages": [
            "https://www.fscj.edu/"
            ],
            "state-province": null,
            "name": "Florida State College at Jacksonville",
            "country": "United States",
            "alpha_two_code": "US"
            },
            {
            "domains": [
            "xavier.edu"
            ],
            "web_pages": [
            "https://www.xavier.edu/"
            ],
            "state-province": null,
            "name": "Xavier University",
            "country": "United States",
            "alpha_two_code": "US"
            },
            {
            "domains": [
            "tusculum.edu"
            ],
            "web_pages": [
            "https://home.tusculum.edu/"
            ],
            "state-province": null,
            "name": "Tusculum College",
            "country": "United States",
            "alpha_two_code": "US"
            },
            {
            "domains": [
            "cst.edu"
            ],
            "web_pages": [
            "https://cst.edu/"
            ],
            "state-province": null,
            "name": "Claremont School of Theology",
            "country": "United States",
            "alpha_two_code": "US"
            },
            {
            "domains": [
            "columbiasc.edu"
            ],
            "web_pages": [
            "https://www.columbiasc.edu/"
            ],
            "state-province": null,
            "name": "Columbia College (SC)",
            "country": "United States",
            "alpha_two_code": "US"
            },
            {
            "domains": [
            "clpccd.edu"
            ],
            "web_pages": [
            "http://www.clpccd.edu/"
            ],
            "state-province": null,
            "name": "Chabot-Las Positas Community College District",
            "country": "United States",
            "alpha_two_code": "US"
            },
            {
            "domains": [
            "keller.edu"
            ],
            "web_pages": [
            "https://www.keller.edu/"
            ],
            "state-province": null,
            "name": "Keller Graduate School of Management",
            "country": "United States",
            "alpha_two_code": "US"
            },
            {
            "domains": [
            "monroecollege.edu"
            ],
            "web_pages": [
            "https://monroecollege.edu/"
            ],
            "state-province": null,
            "name": "Monroe College",
            "country": "United States",
            "alpha_two_code": "US"
            }]
    })
};

const uniServiceByName = async (name) => {
    console.log('Mocked todos by name');
    return Promise.resolve({data:{name: "Lindenwood University"},
    });
};

module.exports = {uniService, uniServiceByName };