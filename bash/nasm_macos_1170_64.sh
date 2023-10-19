#!/bin/bash
echo $1
nasm -f macho64 $1.asm && ld -no_pie -macosx_version_min 11.7.0 -L /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/lib -lSystem -o $1 $1.o && ./$1 && rm $1.o
