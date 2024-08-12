# Knowledge Graph Based RAG

Microsoft developed a new type of RAG. When compared to the baseline RAG that uses vector similarity, this new GraphRAG is great at connecting the dots in terms of context within a conversation. However, many users were wondering if they are able to user GraphRAG on local models. However, as the developers of GraphRAG have announced GraphRAG will only be developed for OpenAI and Azure models. So, this leaves users with concern because they will now have to build their own GraphRAG's on their own. Which not only can be time consuming but also costly in terms of resources. 

Therefore, for my mental health intiative-OpenMind-I took the action of creating a GraphRAG solely based on the information about our company. However, this GraphRAG is a public template that others may use.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Installation

Step-by-step instructions on how to install and set up your project. You can include code blocks for commands.

```bash
git clone https://github.com/asor-1/my_graphrag.git
pip install -r requirements.txt
cd src
```
## Editing Documents

Once you have installed and setup everything correctly follow these next steps: 
1. Edit the *knowledge_file.json* file to match your knowledge graph json file. With this ensure that all of the IDs match up in the relationships section of the file. Otherwise your knowledge graph will be wrong and the RAG will interpret everything incorrectly. 
2. Edit the *documents.json* file to match what your documents look like

## Running the model



## Important Features: 


