import { Component } from '@angular/core';

@Component({
  selector: 'app-java-assignment',
  templateUrl: './java-assignment.component.html',
  styleUrls: ['./java-assignment.component.css']
})
export class JavaAssignmentComponent {
 heding = 'blue';
 questionColor = 'green';
  currentPage = 1;
  questionsPerPage = 10;

 questions: any[] = [
  {
    id: 1,
    question: "Which technology is used to build the structure of a web page?",
    options: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    id: 2,
    question: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "text-style"]
  },
  {
    id: 3,
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<nav>"]
  },
  {
    id: 4,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Color Style Syntax",
      "Code Styling Sheet"
    ]
  },
  {
    id: 5,
    question: "Which attribute is used to define inline styles in HTML?",
    options: ["design", "class", "style", "css"]
  },
  {
    id: 6,
    question: "Which HTML element is used to display an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"]
  },
  {
    id: 7,
    question: "Which CSS property is used to change the background color?",
    options: ["bgcolor", "color", "background-color", "background-style"]
  },
  {
    id: 8,
    question: "Which HTML tag is used to define a table row?",
    options: ["<td>", "<tr>", "<th>", "<table-row>"]
  },
  {
    id: 9,
    question: "Which symbol is used for comments in CSS?",
    options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"]
  },
  {
    id: 10,
    question: "Which HTML tag is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"]
  },

  // =================== 11 - 20 ===================
  {
    id: 11,
    question: "JavaScript is _________ language.",
    options: ["Programming", "Markup", "Style sheet", "Database"]
  },
  {
    id: 12,
    question: "Which method is used to print output in JavaScript?",
    options: ["cout()", "print()", "document.write()", "printf()"]
  },
  {
    id: 13,
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"]
  },
  {
    id: 14,
    question: "Which operator is used to assign a value?",
    options: ["+", "=", "-", "*"]
  },
  {
    id: 15,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "float", "string"]
  },
  {
    id: 16,
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h1>", "<h6>", "<heading>", "<h0>"]
  },
  {
    id: 17,
    question: "Which HTML tag is used to make text bold?",
    options: ["<strong>", "<bold>", "<b>", "<fat>"]
  },
  {
    id: 18,
    question: "Which function is used to convert a string to an integer in JavaScript?",
    options: ["parseInt()", "Integer()", "toInt()", "stringToInt()"]
  },
  {
    id: 19,
    question: "Which tag is used to create a dropdown?",
    options: ["<input>", "<select>", "<dropdown>", "<option>"]
  },
  {
    id: 20,
    question: "Which command is used to initialize a new Git repository?",
    options: ["git start", "git init", "git new", "git create"]
  },

  // =================== 21 - 30 ===================
  {
    id: 21,
    question: "Which protocol is used to transfer web pages?",
    options: ["FTP", "SMTP", "HTTP", "IP"]
  },
  {
    id: 22,
    question: "Which tag is used to create a line break?",
    options: ["<break>", "<lb>", "<br>", "<line>"]
  },
  {
    id: 23,
    question: "Which HTML tag is used to define a footer?",
    options: ["<bottom>", "<end>", "<footer>", "<foot>"]
  },
  {
    id: 24,
    question: "CSS is used for _______.",
    options: ["Styling", "Database", "Logic", "Server-side processing"]
  },
  {
    id: 25,
    question: "Which HTML element defines the title of a document?",
    options: ["<heading>", "<meta>", "<title>", "<header>"]
  },
  {
    id: 26,
    question: "Which JavaScript event occurs when a user clicks an HTML element?",
    options: ["onmouseover", "onclick", "onchange", "onload"]
  },
  {
    id: 27,
    question: "Which HTML tag is used to display a checkbox?",
    options: ["<check>", "<checkbox>", "<input type='checkbox'>", "<box>"]
  },
  {
    id: 28,
    question: "Bootstrap is a ______ framework.",
    options: ["CSS", "Backend", "Database", "JavaScript"]
  },
  {
    id: 29,
    question: "Which Git command is used to check the current status?",
    options: ["git show", "git state", "git status", "git log"]
  },
  {
    id: 30,
    question: "Which method is used to join two arrays in JavaScript?",
    options: ["add()", "join()", "concat()", "merge()"]
  },

  // =================== 31 - 40 ===================
  {
    id: 31,
    question: "Which HTML tag is used for creating a form?",
    options: ["<form>", "<input>", "<table>", "<section>"]
  },
  {
    id: 32,
    question: "Which CSS property is used to set text alignment?",
    options: ["text-position", "alignment", "text-align", "position"]
  },
  {
    id: 33,
    question: "Which attribute is used to uniquely identify HTML elements?",
    options: ["class", "id", "name", "type"]
  },
  {
    id: 34,
    question: "Which JavaScript keyword creates a constant?",
    options: ["let", "var", "final", "const"]
  },
  {
    id: 35,
    question: "Which HTML tag is used for numbered lists?",
    options: ["<ul>", "<li>", "<ol>", "<nl>"]
  },
  {
    id: 36,
    question: "Which Git command is used to upload files to a remote repository?",
    options: ["git push", "git upload", "git send", "git remote"]
  },
  {
    id: 37,
    question: "Which JavaScript function rounds numbers?",
    options: ["Math.round()", "Math.floor()", "Math.ceil()", "round()"]
  },
  {
    id: 38,
    question: "Which tag is used to embed a video in HTML?",
    options: ["<media>", "<embed>", "<video>", "<movie>"]
  },
  {
    id: 39,
    question: "Which HTML attribute specifies an alternate text for images?",
    options: ["alt", "title", "src", "text"]
  },
  {
    id: 40,
    question: "Which CSS property controls the size of a margin?",
    options: ["margin-size", "margin", "spacing", "padding"]
  },

  // =================== 41 - 50 ===================
  {
    id: 41,
    question: "Which command is used to download a Git repository?",
    options: ["git save", "git copy", "git clone", "git get"]
  },
  {
    id: 42,
    question: "JavaScript runs on ______.",
    options: ["Server", "Browser", "Database", "Compiler"]
  },
  {
    id: 43,
    question: "Which tag is used to highlight text?",
    options: ["<highlight>", "<mark>", "<strong>", "<paint>"]
  },
  {
    id: 44,
    question: "Which JavaScript type represents true/false values?",
    options: ["String", "Boolean", "Number", "Float"]
  },
  {
    id: 45,
    question: "Which Git command creates a new branch?",
    options: ["git create", "git new", "git branch", "git add-branch"]
  },
  {
    id: 46,
    question: "Which HTML tag represents a table header?",
    options: ["<th>", "<tr>", "<td>", "<header>"]
  },
  {
    id: 47,
    question: "Which CSS property sets the height of an element?",
    options: ["size-height", "height", "element-height", "h"]
  },
  {
    id: 48,
    question: "Which JavaScript method converts to lowercase?",
    options: ["lowercase()", "toLowerCase()", "makeLower()", "lower()"]
  },
  {
    id: 49,
    question: "Which HTML attribute is used to define inline JavaScript?",
    options: ["js", "script", "onclick", "onexecute"]
  },
  {
    id: 50,
    question: "Which Git command shows commit history?",
    options: ["git history", "git commits", "git log", "git timeline"]
  },

  // =================== 51 - 60 ===================
  {
    id: 51,
    question: "Which CSS property sets the border width?",
    options: ["border-size", "border-width", "line-width", "border-style"]
  },
  {
    id: 52,
    question: "Which HTML tag defines emphasized text?",
    options: ["<em>", "<strong>", "<b>", "<i>"]
  },
  {
    id: 53,
    question: "Which JavaScript function returns array length?",
    options: ["length()", "size()", "count()", "arrayLength()"]
  },
  {
    id: 54,
    question: "Which tag defines the main content of a page?",
    options: ["<content>", "<body>", "<main>", "<section>"]
  },
  {
    id: 55,
    question: "Which method removes the last element of an array?",
    options: ["pop()", "remove()", "delete()", "cut()"]
  },
  {
    id: 56,
    question: "Which CSS property adds shadow to text?",
    options: ["shadow-text", "text-style", "text-shadow", "font-shadow"]
  },
  {
    id: 57,
    question: "Which Git command stages files?",
    options: ["git stage", "git add", "git commit", "git push"]
  },
  {
    id: 58,
    question: "Which HTML tag creates a checkbox?",
    options: ["<box>", "<checkbox>", "<input type='checkbox'>", "<check>"]
  },
  {
    id: 59,
    question: "Which JavaScript function is used to sort arrays?",
    options: ["order()", "sort()", "arrange()", "sequence()"]
  },
  {
    id: 60,
    question: "Which HTML element is used for navigation links?",
    options: ["<nav>", "<navigate>", "<menu>", "<links>"]
  }
];

// SHOW ONLY 10 QUESTIONS
  get paginatedQuestions() {
    const start = (this.currentPage - 1) * this.questionsPerPage;
    const end = start + this.questionsPerPage;
    return this.questions.slice(start, end);
  }

  // ALLOW ONLY ONE CHECKBOX PER QUESTION
  selectOnlyOne(questionId: number, event: any) {
    const checkboxes = document.querySelectorAll(
      `input[name="q${questionId}"]`
    ) as NodeListOf<HTMLInputElement>;

    checkboxes.forEach(cb => {
      if (cb !== event.target) cb.checked = false;
    });
  }

  // NEXT PAGE
  nextPage() {
    if (this.currentPage < 6) {
      this.currentPage++;
    }
  }

  // PREVIOUS PAGE
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}


