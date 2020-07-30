---
title: "Pointers In C Programming Language"
date: 2016-10-04T11:53:00+07:00
tags: ["c", "c++", "pointers"]
---
>Pointers is one of the most powerful feature in c/c++ programming language that provide memory access, manipulation and management. It can improve performance of program by not copying and creating new space for the same value, instead referencing it to be processed further.
<!--more-->

# What is Pointer?
Pointer is one of the most important feature in C/C++ programming language that is play important role for managing memory access and usage. This can be used for referencing a variable to other function/procedure. This pointer point/refer to a variable that reside in memory by pointing to its memory address. 

# Why Pointer?
What make it really powerful is it provides you the direct access to memory so that you can manage and manipulate data in memory with single pointer. It gives you the power to control hardware and optimize memory usage and management as you like. It also improve your program's performance if you can handle the pointers usage properly. 

With pointer you can access any data in memory for processing. By referencing your pointer to that data in certain address in memory, you will get full control of it as you control the direct hardware(RAM) inside your device. You can simply use this pointer to pass the value you want to process to the CPU without creating too much addition space in RAM for that value you want to process. This is one of other advantages of using pointers(properly), memory usage efficiency without wasting too much space that will reduce performance. This is why C/C++ programming languages is fast because of its performance speed by properly using and managing pointers to properly process the data in memory. 

# How Pointer Works?
Pointer work by referencing your value in memory by pointing to its address. This pointer work like variable by taking the value of the data it point to. With this you can pass value by reference to any other function and procedures without creating more space for the copy values. 

This pointer work like **Program Counter** in CPU. **Program Counter** resides in CPU's registers. CPU consists of many registers to hold bits values for processing the instruction given to the CPU from memory. Each of this registers contain **Program Counter** to store the address of instruction to be executed by CPU. This address reside in **Program Counter** come from memory address of the data. So this PC(Program Counter) acts as an reference to the actual data(bits) to be processed/executed by CPU. 

Pointer works like this PC but the different is that the C/C++ pointer resides in memory(RAM) taking one of its space to act as an pointer variable to reference other data in other address in memory(RAM). With this, referencing the data to the CPU will efficienly tell the **Program Counter** what to process next without taking address from another address with same values.

With above explanations, we can conclude the benefits of C/C++ pointers are:

 - Direct Memory access and management.
 - Improve Performance if used properly.
 - Reduce the memory overhead by referencing to the address of the value without creating more unnecessary space.
 - Direct manipulation of hardware give you full control of the core process of hardware.

