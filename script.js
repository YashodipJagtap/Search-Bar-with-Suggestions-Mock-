// Mock data for suggestions
const mockData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
    "Ruby",
    "PHP",
    "Swift",
    "Kotlin",
    "R",
    "Go",
    "Rust",
    "SQL",
    "Perl",
    "Scala",
    "Shell",
    "Dart",
    "Objective-C",
    "MATLAB",
    "Lua",
    "Haskell",
    "Elixir",
    "Erlang",
    "Sass",
    "Less",
    "Bootstrap",
    "Tailwind CSS",
    "jQuery",
    "Angular",
    "React",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "Nuxt.js",
    "Svelte",
    "Deno",
    "Flask",
    "Django",
    "Spring",
    "Laravel",
    "ASP.NET",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Oracle",
    "Redis",
    "SQLite",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub",
    "Bitbucket",
    "Webpack",
    "Vite",
    "Gulp",
    "Grunt",
    "Jenkins",
    "CircleCI",
    "Travis CI",
    "Terraform",
    "Ansible",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "HuggingFace",
    "LangChain",
    "OpenAI",
    "Hadoop",
    "Spark",
    "Tableau",
    "Power BI",
    "Excel"
];

// References to DOM elements
const searchBar = document.getElementById("search-bar");
const suggestionsList = document.getElementById("suggestions");

// Event listener for user input
searchBar.addEventListener("input", function () {
    const input = this.value.toLowerCase(); // Get user input
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    if (input) {
        // Filter mock data based on user input
        const filteredData = mockData.filter(item => 
            item.toLowerCase().includes(input)
        );

        // Create list items for each suggestion
        filteredData.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;

            // Add click event to select suggestion
            listItem.addEventListener("click", function () {
                searchBar.value = item; // Update search bar with selected item
                suggestionsList.innerHTML = ""; // Clear suggestions
            });

            suggestionsList.appendChild(listItem);
        });
    }
});
