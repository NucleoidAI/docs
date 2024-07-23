---
sidebar_position: 2
title: Data Management
description: Nucleoid Data Management
---

Another objective of the project is to manage both of data and logic under the same runtime so that external database won't be needed. This also benefits the system structure that automatically lowers complexity of the system as eliminating moving elements.

Especially from user of the framedoesn't nee

## Runtime-managed `fs`

Default location: `~/.nucleoid/data/`

As each statement run through the runtime, whether it success or failed (Failed by business logic), the runtime stores each statement as single-line JSON in the file system. For example:

```javascript
class Student {}
student1 = new Student();
student2 = new Student();
student1.name = "Daphne";
student3.name = "Can";
```

but it actually stored like this:

```
{"s":"class Student{}", "x":["state.Student=[]"]...}
{"s":"student1 = new Student();"...}
{"s":"student2 = new Student();"...},
{"s":"student1.name = 'Daphne'", "x":["state.student1.name='Daphne'"]...}
{"s":"student3.name = 'Can',"r":"ReferenceError: student3 is not defined"...}
```

### Storing delta

As you see above, the Nucleoid runtime is saving each statement like Git or Event Sourcing instead of traditional datastores. This fits perfectly the rest of the declarative runtime paradigm and gives better handle to manage the data in terms of scaling, re-playing, debugging etc. However, instead of build up the final result of variables, objects in the memory (state) and writes only deltas.

### Performance

Algorithm like Git or Event Sourcing gives better performance, especially the runtime writes the delta as an append operation, which is the fastest disk operation and doesn't need to find or move "the cursor" to where the data is on disk. Instead, the runtime writes with the single operation.
