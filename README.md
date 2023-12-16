## Multithreading
Cores are physical units of the processor that can execute tasks independently. Threads are sequences of instructions that the operating system scheduler creates to be run on the cores. Usually one core runs one thread though mordern processors can multi-thread and run more than one thread per core at a time (hyper-threading). Multithreading is running a [process](https://www.geeksforgeeks.org/difference-between-process-and-thread/) on multiple threads.

### Parallelism vs Concurrency
To run a process parallelly means dividing the process into independently executable chunks and running them simultaneously on multiple threads. 

To run a process concurrently is to execute the chunks of the process on a single thread by switching between tasks. For example:

```bash
fetch('awesomejokeapi.com/give-jokes').then(function callback(joke){
//Do something with the joke
})
```
While the API is called and data is being fetched, the interpreter doesn't wait for the joke but continues to do other tasks of the process. The function has to 'callback' the interpreter to get executed. 

Concurrent application appear to be doing tasks simultaneously but they get executed consecutively in partials.

### What applications should we multi-thread?
It is important to understand the nature of your application in order to improve its performance by spinning up multiple threads.

Applications that are CPU dependent and use it intensively are to suited for using multiple threads.

I/O operations depend on disk and network performance. Since a CPU can't do much about it, multi-threading I/O operations will not improve performance significantly (they might even slow the process down).
