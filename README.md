# AlgoCasts

## Diagrams
- open in https://www.draw.io/ https://app.diagrams.net/- 
[Companion repo to: The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)

[StephenGrider/AlgoCasts](https://github.com/StephenGrider/AlgoCasts)
## Install jest globally
- sudo npm install -g jest
## Run specific test
- jest fib/test.js --watch
## Debug tests
- add debugger: [course section](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8533060#overview)
- call function in code, i.e. reverse("apple");
- cd into directory;
- run node inspect index.js;
- enter cont or c to continue;
- enter repl to check a variable followed by the variable;
- enter the variable name you wish to inspect, then enter
- debugger inside for loop: run c; run repl; control c to leave repl; enter c again for second execution of for loop; enter c again for next execution. And so forth until loop is done; Use c to skip through debugger placed within a map, forEach, or for loop;
- when finished debugging, remove the debugger and also the manual function call.
### debug summary
- Add a 'debugger;' statement in your function
- Call the function manually
- At the terminal, run node inspect index.js'
- To continue execution of the file, press 'c' the 'enter'
- To launch a 'repl' session, type 'repl' then 'enter'
- To exit the 'repl', press Control + C

### linkedlist code reuse
- insertAt() can also handle insertFirst() and insertLast()
- getAt() can also handle getFirst() and getLast()
- removeAt() can also handle removeFirst() and removeLast()

### stephengrider JSPlaygrounds
https://stephengrider.github.io/JSPlaygrounds/
