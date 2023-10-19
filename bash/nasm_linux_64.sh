#!/bin/bash
nasm -felf64 $1.asm && gcc $1.o && ./$1.out
