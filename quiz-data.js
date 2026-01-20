// Quiz Data Structure: quizData[category][difficulty] = [questions]
const quizData = {
    general: {
        easy: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "Which country is home to the kangaroo?",
                options: ["New Zealand", "Australia", "South Africa", "Brazil"],
                correct: 1
            },
            {
                question: "What is the capital of Japan?",
                options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                correct: 2
            },
            {
                question: "How many days are in a week?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                correct: 1
            },
            {
                question: "Which season comes after winter?",
                options: ["Spring", "Summer", "Fall", "Autumn"],
                correct: 0
            },
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
                correct: 1
            },
            {
                question: "What is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the capital of Italy?",
                options: ["Milan", "Venice", "Rome", "Naples"],
                correct: 2
            },
            {
                question: "How many sides does a triangle have?",
                options: ["2", "3", "4", "5"],
                correct: 1
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Earth", "Saturn", "Jupiter", "Neptune"],
                correct: 2
            },
            {
                question: "Which animal is known as the 'King of the Jungle'?",
                options: ["Tiger", "Lion", "Leopard", "Cheetah"],
                correct: 1
            },
            {
                question: "What is the freezing point of water in Celsius?",
                options: ["-10°C", "0°C", "10°C", "32°C"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the name of the world's largest desert?",
                options: ["Sahara", "Antarctica", "Gobi", "Arabian"],
                correct: 1
            },
            {
                question: "Which ancient wonder of the world still exists today?",
                options: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
                correct: 2
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correct: 1
            },
            {
                question: "Which language has the most native speakers?",
                options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
                correct: 2
            },
            {
                question: "What is the deepest point in the ocean?",
                options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "South Sandwich Trench"],
                correct: 0
            },
            {
                question: "Which mountain is the highest in the world?",
                options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
                correct: 2
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Liver", "Lungs", "Skin", "Heart"],
                correct: 2
            },
            {
                question: "Which country has the most time zones?",
                options: ["Russia", "United States", "China", "France"],
                correct: 0
            },
            {
                question: "What is the chemical symbol for silver?",
                options: ["Si", "Ag", "Au", "Al"],
                correct: 1
            },
            {
                question: "Which ocean is the smallest?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 2
            }
        ]
    },
    science: {
        easy: [
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "NaCl", "O2"],
                correct: 0
            },
            {
                question: "Which planet is closest to the Sun?",
                options: ["Venus", "Earth", "Mercury", "Mars"],
                correct: 2
            },
            {
                question: "What is the process by which plants make food?",
                options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                correct: 1
            },
            {
                question: "What is the atomic number of hydrogen?",
                options: ["0", "1", "2", "3"],
                correct: 1
            },
            {
                question: "Which blood type is known as the universal donor?",
                options: ["A", "B", "AB", "O"],
                correct: 3
            },
            {
                question: "What do bees make?",
                options: ["Honey", "Wax", "Both honey and wax", "Milk"],
                correct: 2
            },
            {
                question: "How many bones are in an adult human body?",
                options: ["196", "206", "216", "226"],
                correct: 1
            },
            {
                question: "What is H2O commonly known as?",
                options: ["Water", "Hydrogen", "Oxygen", "Salt"],
                correct: 0
            },
            {
                question: "Which sense do we use to taste?",
                options: ["Eyes", "Nose", "Tongue", "Ears"],
                correct: 2
            },
            {
                question: "What is the closest star to Earth?",
                options: ["Alpha Centauri", "The Sun", "Sirius", "Betelgeuse"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is the speed of light in vacuum?",
                options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                correct: 0
            },
            {
                question: "Which subatomic particle has a negative charge?",
                options: ["Proton", "Neutron", "Electron", "Neutrino"],
                correct: 2
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "What is the unit of electric current?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 1
            },
            {
                question: "What is the most abundant gas in Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                correct: 2
            },
            {
                question: "What is the study of weather called?",
                options: ["Geology", "Meteorology", "Biology", "Astronomy"],
                correct: 1
            },
            {
                question: "Which planet has rings?",
                options: ["Jupiter", "Saturn", "Uranus", "All of the above"],
                correct: 3
            },
            {
                question: "What is the speed of sound?",
                options: ["343 m/s", "500 m/s", "1000 m/s", "1500 m/s"],
                correct: 0
            },
            {
                question: "Which part of the plant makes food?",
                options: ["Roots", "Stem", "Leaves", "Flowers"],
                correct: 2
            },
            {
                question: "What is the smallest unit of matter?",
                options: ["Molecule", "Atom", "Cell", "Electron"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the half-life of Carbon-14?",
                options: ["5,730 years", "10,000 years", "1,000 years", "50,000 years"],
                correct: 0
            },
            {
                question: "Which quantum number describes the shape of an orbital?",
                options: ["Principal", "Azimuthal", "Magnetic", "Spin"],
                correct: 1
            },
            {
                question: "What is the Heisenberg Uncertainty Principle?",
                options: ["Energy cannot be created", "Position and momentum cannot be known simultaneously", "Light behaves as wave and particle", "Entropy always increases"],
                correct: 1
            },
            {
                question: "What is the formula for calculating kinetic energy?",
                options: ["mv²", "½mv²", "mgh", "Fd"],
                correct: 1
            },
            {
                question: "Which enzyme breaks down proteins in the stomach?",
                options: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
                correct: 2
            },
            {
                question: "What is Newton's First Law of Motion?",
                options: ["F=ma", "An object at rest stays at rest", "Energy is conserved", "Action equals reaction"],
                correct: 1
            },
            {
                question: "What is the pH of pure water?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "Which scientist proposed the theory of relativity?",
                options: ["Newton", "Einstein", "Darwin", "Galileo"],
                correct: 1
            },
            {
                question: "What is the process of cell division called?",
                options: ["Mitosis", "Meiosis", "Both", "Photosynthesis"],
                correct: 2
            },
            {
                question: "Which gas makes up most of the Sun?",
                options: ["Oxygen", "Helium", "Hydrogen", "Nitrogen"],
                correct: 2
            }
        ]
    },
    history: {
        easy: [
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                correct: 2
            },
            {
                question: "In which year did the Titanic sink?",
                options: ["1910", "1912", "1914", "1916"],
                correct: 1
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
                correct: 1
            },
            {
                question: "The Renaissance period began in which country?",
                options: ["France", "Germany", "Italy", "Spain"],
                correct: 2
            },
            {
                question: "Who invented the telephone?",
                options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
                correct: 1
            },
            {
                question: "In which year did World War I begin?",
                options: ["1912", "1914", "1916", "1918"],
                correct: 1
            },
            {
                question: "Who was the first man to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
                correct: 1
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: ["Greeks", "Romans", "Egyptians", "Mayans"],
                correct: 2
            },
            {
                question: "What was the name of the ship that brought the Pilgrims to America?",
                options: ["Titanic", "Mayflower", "Santa Maria", "Endeavour"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1989", "1991", "1993"],
                correct: 1
            },
            {
                question: "Who wrote 'The Art of War'?",
                options: ["Confucius", "Sun Tzu", "Lao Tzu", "Mencius"],
                correct: 1
            },
            {
                question: "The Industrial Revolution began in which country?",
                options: ["France", "Germany", "United States", "United Kingdom"],
                correct: 3
            },
            {
                question: "Who was known as the 'Iron Lady'?",
                options: ["Angela Merkel", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
                correct: 1
            },
            {
                question: "The Magna Carta was signed in which year?",
                options: ["1215", "1315", "1415", "1515"],
                correct: 0
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "Which war was fought between 1861-1865 in America?",
                options: ["Revolutionary War", "Civil War", "World War I", "World War II"],
                correct: 1
            },
            {
                question: "Who painted 'Starry Night'?",
                options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
                correct: 1
            },
            {
                question: "In which year did the American Revolution begin?",
                options: ["1775", "1776", "1781", "1783"],
                correct: 0
            },
            {
                question: "Which empire was ruled by Genghis Khan?",
                options: ["Roman", "Mongol", "Ottoman", "Byzantine"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "Which battle marked the end of Napoleon's rule?",
                options: ["Battle of Waterloo", "Battle of Austerlitz", "Battle of Borodino", "Battle of Leipzig"],
                correct: 0
            },
            {
                question: "What was the name of the ship that brought the Pilgrims to America?",
                options: ["Mayflower", "Santa Maria", "Nina", "Pinta"],
                correct: 0
            },
            {
                question: "Which dynasty ruled China for the longest period?",
                options: ["Tang", "Song", "Ming", "Qing"],
                correct: 0
            },
            {
                question: "Who was the last Tsar of Russia?",
                options: ["Alexander II", "Alexander III", "Nicholas I", "Nicholas II"],
                correct: 3
            },
            {
                question: "In which year did the French Revolution begin?",
                options: ["1787", "1789", "1791", "1793"],
                correct: 1
            },
            {
                question: "Which ancient Greek philosopher was sentenced to death by hemlock?",
                options: ["Plato", "Aristotle", "Socrates", "Pythagoras"],
                correct: 2
            },
            {
                question: "What was the name of the first atomic bomb dropped on Japan?",
                options: ["Little Boy", "Fat Man", "Trinity", "Manhattan"],
                correct: 0
            },
            {
                question: "Which empire fell in 1453 with the capture of Constantinople?",
                options: ["Roman", "Byzantine", "Ottoman", "Persian"],
                correct: 1
            },
            {
                question: "Who was the first female Prime Minister of the United Kingdom?",
                options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
                correct: 1
            },
            {
                question: "In which year did the Cold War end?",
                options: ["1987", "1989", "1991", "1993"],
                correct: 2
            }
        ]
    },
    technology: {
        easy: [
            {
                question: "What does HTML stand for?",
                options: ["HyperText Markup Language", "HighText Machine Language", "HyperText and links Markup Language", "Home Tool Markup Language"],
                correct: 0
            },
            {
                question: "What does CSS stand for?",
                options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
                correct: 2
            },
            {
                question: "What does API stand for?",
                options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Programming Interface", "Application Program Integration"],
                correct: 0
            },
            {
                question: "Which protocol is used for secure web browsing?",
                options: ["HTTP", "FTP", "HTTPS", "SMTP"],
                correct: 2
            },
            {
                question: "Which database is known as NoSQL?",
                options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
                correct: 2
            },
            {
                question: "What does URL stand for?",
                options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"],
                correct: 0
            },
            {
                question: "What is the main purpose of a firewall?",
                options: ["Speed up internet", "Block unauthorized access", "Store files", "Display websites"],
                correct: 1
            },
            {
                question: "Which company created Windows?",
                options: ["Apple", "Microsoft", "Google", "IBM"],
                correct: 1
            },
            {
                question: "What does RAM stand for?",
                options: ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
                correct: 0
            },
            {
                question: "What is the file extension for a JavaScript file?",
                options: [".java", ".js", ".javascript", ".script"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "Which programming language is known as the 'language of the web'?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correct: 2
            },
            {
                question: "Which data structure follows LIFO principle?",
                options: ["Queue", "Stack", "Array", "Linked List"],
                correct: 1
            },
            {
                question: "What is the time complexity of binary search?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                correct: 1
            },
            {
                question: "Which company created the JavaScript programming language?",
                options: ["Microsoft", "Google", "Netscape", "Oracle"],
                correct: 2
            },
            {
                question: "What is the latest version of HTTP?",
                options: ["HTTP/1.1", "HTTP/2", "HTTP/3", "HTTP/4"],
                correct: 2
            },
            {
                question: "What is the time complexity of linear search?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 2
            },
            {
                question: "Which data structure uses FIFO principle?",
                options: ["Stack", "Queue", "Array", "Tree"],
                correct: 1
            },
            {
                question: "What is the purpose of DNS?",
                options: ["Store data", "Translate domain names to IP", "Send emails", "Create websites"],
                correct: 1
            },
            {
                question: "Which protocol is used for email?",
                options: ["HTTP", "FTP", "SMTP", "HTTPS"],
                correct: 2
            },
            {
                question: "What is the difference between HTTP and HTTPS?",
                options: ["HTTPS is faster", "HTTPS is secure", "No difference", "HTTP is newer"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the time complexity of quicksort in average case?",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
                correct: 1
            },
            {
                question: "Which design pattern ensures only one instance of a class?",
                options: ["Factory", "Singleton", "Observer", "Strategy"],
                correct: 1
            },
            {
                question: "What does REST stand for?",
                options: ["Representational State Transfer", "Remote State Transfer", "Resource State Transfer", "Representative State Transfer"],
                correct: 0
            },
            {
                question: "Which algorithm is used for shortest path finding?",
                options: ["BFS", "DFS", "Dijkstra's", "Binary Search"],
                correct: 2
            },
            {
                question: "What is the CAP theorem?",
                options: ["Consistency, Availability, Partition tolerance", "Complexity, Accuracy, Performance", "Code, Algorithm, Program", "Cache, Access, Process"],
                correct: 0
            },
            {
                question: "What is the time complexity of merge sort?",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
                correct: 1
            },
            {
                question: "What is a hash table?",
                options: ["A data structure", "A function", "A variable", "A loop"],
                correct: 0
            },
            {
                question: "What does SQL stand for?",
                options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
                correct: 0
            },
            {
                question: "Which sorting algorithm has the best average time complexity?",
                options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
                correct: 1
            },
            {
                question: "What is the purpose of a load balancer?",
                options: ["Store data", "Distribute traffic", "Create backups", "Monitor systems"],
                correct: 1
            }
        ]
    },
    javascript: {
        easy: [
            {
                question: "What is the correct way to declare a variable in JavaScript?",
                options: ["var x = 5;", "variable x = 5;", "v x = 5;", "declare x = 5;"],
                correct: 0
            },
            {
                question: "Which operator is used for strict equality in JavaScript?",
                options: ["==", "===", "=", "!="],
                correct: 1
            },
            {
                question: "What does DOM stand for?",
                options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Dynamic Object Model"],
                correct: 0
            },
            {
                question: "Which method adds an element to the end of an array?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correct: 0
            },
            {
                question: "What is the output of: typeof null?",
                options: ["null", "object", "undefined", "boolean"],
                correct: 1
            },
            {
                question: "Which method removes the last element from an array?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correct: 1
            },
            {
                question: "What is the result of: '5' + 3?",
                options: ["8", "53", "Error", "undefined"],
                correct: 1
            },
            {
                question: "Which keyword is used to declare a constant?",
                options: ["var", "let", "const", "constant"],
                correct: 2
            },
            {
                question: "What does JSON stand for?",
                options: ["JavaScript Object Notation", "Java Source Object Notation", "JavaScript Oriented Network", "Java Standard Object Notation"],
                correct: 0
            },
            {
                question: "Which method converts a string to a number?",
                options: ["toString()", "parseInt()", "toNumber()", "convert()"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is a closure in JavaScript?",
                options: ["A function inside another function", "A function that has access to outer scope variables", "A method to close a file", "A way to end a loop"],
                correct: 1
            },
            {
                question: "What does 'this' refer to in a JavaScript function?",
                options: ["The function itself", "The global object", "The object that owns the function", "The parent function"],
                correct: 2
            },
            {
                question: "Which method creates a new array with results of calling a function?",
                options: ["forEach()", "map()", "filter()", "reduce()"],
                correct: 1
            },
            {
                question: "What is the purpose of 'use strict'?",
                options: ["To enable strict mode", "To disable errors", "To improve performance", "To allow global variables"],
                correct: 0
            },
            {
                question: "What is the difference between let and var?",
                options: ["let is block-scoped, var is function-scoped", "var is newer", "No difference", "let is global"],
                correct: 0
            },
            {
                question: "What is the spread operator in JavaScript?",
                options: ["...", "**", "&&", "||"],
                correct: 0
            },
            {
                question: "Which method is used to handle errors in JavaScript?",
                options: ["try-catch", "if-else", "switch", "for loop"],
                correct: 0
            },
            {
                question: "What is destructuring in JavaScript?",
                options: ["Breaking down objects/arrays", "Creating variables", "Deleting data", "Looping"],
                correct: 0
            },
            {
                question: "What is the arrow function syntax?",
                options: ["function() {}", "() => {}", "() function {}", "=> () {}"],
                correct: 1
            },
            {
                question: "What does 'use strict' do?",
                options: ["Enables strict mode", "Disables errors", "Improves speed", "Allows globals"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is the event loop in JavaScript?",
                options: ["A loop that handles events", "A mechanism for handling asynchronous operations", "A way to iterate arrays", "A debugging tool"],
                correct: 1
            },
            {
                question: "What is a Promise in JavaScript?",
                options: ["A function", "An object representing eventual completion", "A variable", "A loop"],
                correct: 1
            },
            {
                question: "What is the difference between == and ===?",
                options: ["== checks value, === checks value and type", "No difference", "=== is deprecated", "== is newer"],
                correct: 0
            },
            {
                question: "What is hoisting in JavaScript?",
                options: ["Moving variables to top", "Lifting objects", "Moving declarations to top of scope", "A type of loop"],
                correct: 2
            },
            {
                question: "What does async/await do?",
                options: ["Makes code synchronous", "Handles asynchronous operations", "Improves performance", "Creates loops"],
                correct: 1
            },
            {
                question: "What is a callback function?",
                options: ["A function passed as argument", "A return value", "A variable", "A loop"],
                correct: 0
            },
            {
                question: "What is the difference between null and undefined?",
                options: ["null is assigned, undefined is default", "No difference", "undefined is newer", "null is deprecated"],
                correct: 0
            },
            {
                question: "What is the prototype chain?",
                options: ["Inheritance mechanism", "A function", "A variable", "A loop"],
                correct: 0
            },
            {
                question: "What is currying in JavaScript?",
                options: ["Transforming functions", "A variable", "A loop", "A class"],
                correct: 0
            },
            {
                question: "What is the difference between .call() and .apply()?",
                options: [".call() takes arguments, .apply() takes array", "No difference", ".apply() is newer", ".call() is deprecated"],
                correct: 0
            }
        ]
    },
    python: {
        easy: [
            {
                question: "Which keyword is used to define a function in Python?",
                options: ["function", "def", "define", "func"],
                correct: 1
            },
            {
                question: "What is the output of: print(type([]))?",
                options: ["<class 'list'>", "<class 'array'>", "<class 'dict'>", "error"],
                correct: 0
            },
            {
                question: "Which operator is used for exponentiation in Python?",
                options: ["^", "**", "exp", "pow"],
                correct: 1
            },
            {
                question: "What does PEP stand for?",
                options: ["Python Enhancement Proposal", "Python Extension Protocol", "Python Execution Process", "Python Error Prevention"],
                correct: 0
            },
            {
                question: "Which method removes an item from a list by value?",
                options: ["remove()", "delete()", "pop()", "discard()"],
                correct: 0
            },
            {
                question: "What is the output of: print(2 ** 3)?",
                options: ["6", "8", "9", "5"],
                correct: 1
            },
            {
                question: "Which data type is mutable in Python?",
                options: ["String", "Tuple", "List", "Integer"],
                correct: 2
            },
            {
                question: "What is the correct way to import a module?",
                options: ["import module", "include module", "require module", "load module"],
                correct: 0
            },
            {
                question: "What does len() function do?",
                options: ["Returns length", "Returns type", "Returns value", "Returns index"],
                correct: 0
            },
            {
                question: "Which operator is used for floor division?",
                options: ["/", "//", "%", "**"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is a list comprehension?",
                options: ["A way to create lists", "A concise way to create lists", "A function", "A loop"],
                correct: 1
            },
            {
                question: "What is the difference between list and tuple?",
                options: ["List is mutable, tuple is immutable", "No difference", "Tuple is mutable", "List is faster"],
                correct: 0
            },
            {
                question: "What does 'self' refer to in a Python class?",
                options: ["The class itself", "The instance of the class", "A keyword", "The parent class"],
                correct: 1
            },
            {
                question: "What is a decorator in Python?",
                options: ["A function that modifies another function", "A variable", "A loop", "A class"],
                correct: 0
            },
            {
                question: "What is the purpose of __init__ method?",
                options: ["To initialize a class", "To end a program", "To import modules", "To print output"],
                correct: 0
            },
            {
                question: "What is a lambda function?",
                options: ["Anonymous function", "Named function", "Class method", "Module"],
                correct: 0
            },
            {
                question: "What is the difference between == and is?",
                options: ["== compares values, is compares identity", "No difference", "is is newer", "== is deprecated"],
                correct: 0
            },
            {
                question: "What is a module in Python?",
                options: ["A file with Python code", "A variable", "A function", "A loop"],
                correct: 0
            },
            {
                question: "What does 'yield' do in Python?",
                options: ["Returns a generator", "Returns a value", "Stops execution", "Continues loop"],
                correct: 0
            },
            {
                question: "What is the purpose of 'pass' statement?",
                options: ["Placeholder", "Skip iteration", "Break loop", "Return value"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is the Global Interpreter Lock (GIL)?",
                options: ["A lock that prevents multiple threads", "A Python feature", "A mechanism that allows only one thread", "All of the above"],
                correct: 3
            },
            {
                question: "What is a generator in Python?",
                options: ["A function that returns an iterator", "A class", "A variable", "A loop"],
                correct: 0
            },
            {
                question: "What is the difference between __str__ and __repr__?",
                options: ["__str__ is for users, __repr__ is for developers", "No difference", "__repr__ is newer", "__str__ is deprecated"],
                correct: 0
            },
            {
                question: "What is duck typing?",
                options: ["If it walks like a duck", "Dynamic typing based on behavior", "A Python version", "A type of loop"],
                correct: 1
            },
            {
                question: "What does *args and **kwargs do?",
                options: ["Handles variable arguments", "Creates lists", "Imports modules", "Defines classes"],
                correct: 0
            },
            {
                question: "What is the MRO in Python?",
                options: ["Method Resolution Order", "Multiple Return Order", "Method Return Object", "Multiple Resolution Object"],
                correct: 0
            },
            {
                question: "What is a metaclass?",
                options: ["Class of a class", "A variable", "A function", "A loop"],
                correct: 0
            },
            {
                question: "What is the difference between __new__ and __init__?",
                options: ["__new__ creates, __init__ initializes", "No difference", "__init__ is newer", "__new__ is deprecated"],
                correct: 0
            },
            {
                question: "What is the purpose of @property decorator?",
                options: ["Creates properties", "Defines methods", "Imports modules", "Creates classes"],
                correct: 0
            },
            {
                question: "What is the difference between __getattr__ and __getattribute__?",
                options: ["__getattr__ only for missing, __getattribute__ for all", "No difference", "__getattribute__ is newer", "__getattr__ is deprecated"],
                correct: 0
            }
        ]
    },
    java: {
        easy: [
            {
                question: "What is the main method signature in Java?",
                options: ["public static void main(String[] args)", "public void main()", "static void main()", "public main()"],
                correct: 0
            },
            {
                question: "Which keyword is used for inheritance in Java?",
                options: ["inherits", "extends", "implements", "super"],
                correct: 1
            },
            {
                question: "What is the default value of a boolean variable?",
                options: ["true", "false", "null", "0"],
                correct: 1
            },
            {
                question: "Which collection class is synchronized?",
                options: ["ArrayList", "Vector", "LinkedList", "HashSet"],
                correct: 1
            },
            {
                question: "What is JVM?",
                options: ["Java Virtual Machine", "Java Variable Manager", "Java Version Manager", "Java Vector Machine"],
                correct: 0
            },
            {
                question: "What is the default value of an int variable?",
                options: ["0", "1", "null", "undefined"],
                correct: 0
            },
            {
                question: "Which keyword is used to prevent inheritance?",
                options: ["private", "final", "static", "abstract"],
                correct: 1
            },
            {
                question: "What is the size of a boolean in Java?",
                options: ["1 bit", "1 byte", "2 bytes", "4 bytes"],
                correct: 1
            },
            {
                question: "Which package contains the Scanner class?",
                options: ["java.util", "java.lang", "java.io", "java.net"],
                correct: 0
            },
            {
                question: "What is the superclass of all classes in Java?",
                options: ["Object", "Class", "Super", "Parent"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "What is the difference between == and .equals()?",
                options: ["== compares references, .equals() compares values", "No difference", ".equals() is deprecated", "== is newer"],
                correct: 0
            },
            {
                question: "What is method overriding?",
                options: ["Providing specific implementation", "Creating a new method", "Deleting a method", "Importing a method"],
                correct: 0
            },
            {
                question: "What is an abstract class?",
                options: ["A class that cannot be instantiated", "A regular class", "A final class", "A private class"],
                correct: 0
            },
            {
                question: "What is the difference between String and StringBuffer?",
                options: ["String is immutable, StringBuffer is mutable", "No difference", "StringBuffer is faster", "String is newer"],
                correct: 0
            },
            {
                question: "What is polymorphism?",
                options: ["One interface, multiple forms", "Multiple interfaces", "A type of loop", "A variable"],
                correct: 0
            },
            {
                question: "What is method overloading?",
                options: ["Same method, different parameters", "Different methods", "Inheriting methods", "Overriding methods"],
                correct: 0
            },
            {
                question: "What is the difference between interface and abstract class?",
                options: ["Interface has no implementation, abstract can have", "No difference", "Abstract is newer", "Interface is deprecated"],
                correct: 0
            },
            {
                question: "What is the purpose of 'super' keyword?",
                options: ["Access parent class", "Access child class", "Create objects", "Delete objects"],
                correct: 0
            },
            {
                question: "What is a wrapper class?",
                options: ["Wraps primitive types", "Wraps objects", "Wraps methods", "Wraps classes"],
                correct: 0
            },
            {
                question: "What is the difference between String, StringBuffer, and StringBuilder?",
                options: ["String immutable, StringBuffer/Builder mutable", "No difference", "StringBuilder is newer", "String is deprecated"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is the difference between checked and unchecked exceptions?",
                options: ["Checked must be handled, unchecked don't", "No difference", "Unchecked are newer", "Checked are deprecated"],
                correct: 0
            },
            {
                question: "What is the diamond problem?",
                options: ["Multiple inheritance issue", "A compilation error", "A runtime error", "A design pattern"],
                correct: 0
            },
            {
                question: "What is the purpose of volatile keyword?",
                options: ["Ensures visibility across threads", "Improves performance", "Creates variables", "Defines classes"],
                correct: 0
            },
            {
                question: "What is the difference between ArrayList and LinkedList?",
                options: ["ArrayList uses array, LinkedList uses nodes", "No difference", "LinkedList is faster", "ArrayList is newer"],
                correct: 0
            },
            {
                question: "What is garbage collection?",
                options: ["Automatic memory management", "Manual memory cleanup", "A method", "A class"],
                correct: 0
            },
            {
                question: "What is the difference between throw and throws?",
                options: ["throw throws exception, throws declares", "No difference", "throws is newer", "throw is deprecated"],
                correct: 0
            },
            {
                question: "What is a thread in Java?",
                options: ["Lightweight process", "Heavy process", "A method", "A class"],
                correct: 0
            },
            {
                question: "What is the purpose of synchronized keyword?",
                options: ["Thread safety", "Speed improvement", "Memory management", "Error handling"],
                correct: 0
            },
            {
                question: "What is the difference between ArrayList and Vector?",
                options: ["Vector is synchronized, ArrayList is not", "No difference", "ArrayList is newer", "Vector is deprecated"],
                correct: 0
            },
            {
                question: "What is reflection in Java?",
                options: ["Runtime class inspection", "Compile-time checking", "A method", "A variable"],
                correct: 0
            }
        ]
    },
    cpp: {
        easy: [
            {
                question: "What does C++ stand for?",
                options: ["C Plus Plus", "C Increment", "C Extended", "C Advanced"],
                correct: 0
            },
            {
                question: "Which operator is used for pointer dereferencing?",
                options: ["*", "&", "->", "::"],
                correct: 0
            },
            {
                question: "What is the size of int in C++?",
                options: ["2 bytes", "4 bytes", "Depends on system", "8 bytes"],
                correct: 2
            },
            {
                question: "Which keyword is used for dynamic memory allocation?",
                options: ["new", "malloc", "alloc", "create"],
                correct: 0
            },
            {
                question: "What is a namespace in C++?",
                options: ["A way to organize code", "A variable", "A function", "A loop"],
                correct: 0
            },
            {
                question: "What is the difference between ++i and i++?",
                options: ["++i pre-increment, i++ post-increment", "No difference", "i++ is newer", "++i is deprecated"],
                correct: 0
            },
            {
                question: "Which operator is used for address of?",
                options: ["*", "&", "->", "::"],
                correct: 1
            },
            {
                question: "What is the purpose of #include?",
                options: ["Include header files", "Include libraries", "Include functions", "Include variables"],
                correct: 0
            },
            {
                question: "What is the default access modifier in a class?",
                options: ["public", "private", "protected", "internal"],
                correct: 1
            },
            {
                question: "What is the size of a pointer in 64-bit system?",
                options: ["4 bytes", "8 bytes", "16 bytes", "Depends on type"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is the difference between struct and class?",
                options: ["Default access: struct is public, class is private", "No difference", "Struct is deprecated", "Class is newer"],
                correct: 0
            },
            {
                question: "What is a virtual function?",
                options: ["A function that can be overridden", "A regular function", "A static function", "A private function"],
                correct: 0
            },
            {
                question: "What is the purpose of const keyword?",
                options: ["Makes variable immutable", "Improves performance", "Creates variables", "Defines functions"],
                correct: 0
            },
            {
                question: "What is a template in C++?",
                options: ["Generic programming feature", "A class", "A variable", "A function"],
                correct: 0
            },
            {
                question: "What is RAII?",
                options: ["Resource Acquisition Is Initialization", "A design pattern", "Memory management", "All of the above"],
                correct: 3
            },
            {
                question: "What is the difference between new and malloc?",
                options: ["new calls constructor, malloc doesn't", "No difference", "malloc is newer", "new is deprecated"],
                correct: 0
            },
            {
                question: "What is a reference in C++?",
                options: ["Alias for variable", "Pointer", "Variable", "Function"],
                correct: 0
            },
            {
                question: "What is the purpose of const_cast?",
                options: ["Remove const qualifier", "Add const", "Cast types", "Delete object"],
                correct: 0
            },
            {
                question: "What is a friend function?",
                options: ["Accesses private members", "Public function", "Private function", "Protected function"],
                correct: 0
            },
            {
                question: "What is the difference between override and final?",
                options: ["override allows, final prevents", "No difference", "final is newer", "override is deprecated"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is the difference between stack and heap?",
                options: ["Stack is faster, heap is larger", "No difference", "Heap is faster", "Stack is deprecated"],
                correct: 0
            },
            {
                question: "What is move semantics?",
                options: ["Efficient resource transfer", "A type of loop", "A variable", "A function"],
                correct: 0
            },
            {
                question: "What is the purpose of smart pointers?",
                options: ["Automatic memory management", "Manual memory cleanup", "A method", "A class"],
                correct: 0
            },
            {
                question: "What is the difference between lvalue and rvalue?",
                options: ["lvalue has address, rvalue doesn't", "No difference", "rvalue is newer", "lvalue is deprecated"],
                correct: 0
            },
            {
                question: "What is SFINAE?",
                options: ["Substitution Failure Is Not An Error", "A template feature", "Compile-time checking", "All of the above"],
                correct: 3
            },
            {
                question: "What is perfect forwarding?",
                options: ["Preserving value category", "Moving values", "Copying values", "Deleting values"],
                correct: 0
            },
            {
                question: "What is the difference between std::unique_ptr and std::shared_ptr?",
                options: ["unique_ptr exclusive, shared_ptr shared", "No difference", "shared_ptr is newer", "unique_ptr is deprecated"],
                correct: 0
            },
            {
                question: "What is variadic template?",
                options: ["Template with variable arguments", "Fixed template", "Single template", "Multiple templates"],
                correct: 0
            },
            {
                question: "What is the purpose of std::move?",
                options: ["Convert to rvalue", "Move object", "Copy object", "Delete object"],
                correct: 0
            },
            {
                question: "What is CRTP?",
                options: ["Curiously Recurring Template Pattern", "Class Return Template Pattern", "Compile Runtime Template Pattern", "Code Reuse Template Pattern"],
                correct: 0
            }
        ]
    }
};
