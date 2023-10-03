#!/bin/bash

# cat /etc/os-release

# PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
# NAME="Debian GNU/Linux"
# VERSION_ID="11"
# VERSION="11 (bullseye)"
# VERSION_CODENAME=bullseye
# ID=debian
# HOME_URL="https://www.debian.org/"
# SUPPORT_URL="https://www.debian.org/support"
# BUG_REPORT_URL="https://bugs.debian.org/"

# bash debian.sh

llvm_id="sysprog"

jobs_compiler=16
jobs_linker=2

llvm_build="/d/b/llvm-project/$llvm_id"
llvm_ccache="/d/ccache/llvm-project/$llvm_id"
llvm_install="/d/t/llvm-project/$llvm_id"
llvm_module="/d/module/llvm-project"
llvm_src="/d/src/llvm-project/$llvm_id"
llvm_src_main="/d/src/llvm-project/main"

projects=""`
	`"clang-tools-extra;"`
	`"clang;"`
	`"lld;"`
	`"lldb;"`
	`"mlir;"`
	`"polly;"`
	`""

runtimes=""`
	`"openmp;"`
	`""

apt update
apt upgrade -y
apt install -y \
    ccache \
    clang \
    cmake \
    environment-modules \
    git \
    graphviz \
    lld \
    ninja-build \
    tclsh \

mkdir -p -v \
      $clangd_config \
      $llvm_build \
      $llvm_install \
      $llvm_module

# lab1
git clone https://github.com/llvm/llvm-project.git $llvm_src_main
git -C $llvm_src_main worktree add -b sysprog $llvm_src llvmorg-14.0.6

# lab2
pushd $llvm_build
cmake \
    -DBUILD_SHARED_LIBS=ON \
    -DCMAKE_BUILD_TYPE="Release" \
    -DCMAKE_CXX_COMPILER=clang++ \
    -DCMAKE_C_COMPILER=clang \
    -DCMAKE_GENERATOR="Ninja" \
    -DCMAKE_INSTALL_PREFIX=$llvm_install \
    -DLLVM_BUILD_BENCHMARKS=ON \
    -DLLVM_BUILD_EXAMPLES=ON \
    -DLLVM_BUILD_TESTS=ON \
    -DLLVM_BUILD_TOOLS=ON \
    -DLLVM_CCACHE_BUILD=ON \
    -DLLVM_CCACHE_DIR=$llvm_ccache \
    -DLLVM_CCACHE_MAXSIZE="16" \
    -DLLVM_ENABLE_ASSERTIONS=ON \
    -DLLVM_ENABLE_PROJECTS=$projects \
    -DLLVM_ENABLE_RUNTIMES=$runtimes \
    -DLLVM_INSTALL_UTILS=ON \
    -DLLVM_OPTIMIZED_TABLEGEN=ON \
    -DLLVM_PARALLEL_COMPILE_JOBS=$jobs_compiler \
    -DLLVM_PARALLEL_LINK_JOBS=$jobs_linker \
    -DLLVM_TARGETS_TO_BUILD="X86" \
    -DLLVM_USE_LINKER="lld" \
    $llvm_src/llvm
# ninja -j $jobs_compiler
# ninja install
popd

# lab3
cat >> ~/.bashrc << EOF

source /usr/share/modules/init/bash
export MODULEPATH=/d/module
export __build="/d/b"
export __toolchain="/d/t"
EOF

cat > $llvm_module/sysprog << EOF
#%Module

conflict	llvm-project
set		version			sysprog
set		prefix			$::env(__toolchain)/llvm-project/\$version
setenv		CC			clang
setenv		CLANG_BIN		\$prefix/bin
setenv		CLANG_LIB		\$prefix/lib
setenv		CLANG_PATH		\$prefix
setenv		CXX			clang++
append-path	PATH			$::env(__build)/llvm-project/\$version/bin
prepend-path	CPATH			\$prefix/include
prepend-path	CPLUS_INCLUDE_PATH	\$prefix/include
prepend-path	C_INCLUDE_PATH		\$prefix/include
prepend-path	LD_LIBRARY_PATH		\$prefix/lib
prepend-path	LD_LIBRARY_PATH		\$prefix/libexec
prepend-path	LIBRARY_PATH		\$prefix/lib
prepend-path	LIBRARY_PATH		\$prefix/libexec
prepend-path	MANPATH			\$prefix/share/man
prepend-path	PATH			\$prefix/bin
EOF
