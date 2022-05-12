to run = node filename.js


how javascript works??
1. single threat ( 1 call stack only) LIFO (synconus)
2. non block (asynconuse) exp : setTimeout()


browser build up :
1. Memory Heap (memory allocation) exp : creating variable
2. Call Stack (where code read and excecute) exp : function console.log

issue : 
1. Memory lack (limited amout of memory) 
	causes :
		1. unused memory fill up (exp : unused variable)
		
		
Javascript run-time environment
1. Web API 
2. callback queue
3. event loop

Web API : someting happened in browser exp : DOM,AJAX, Timeout

callback queue : onClick,onLoad,onDone(listener exp : eventListener) 
