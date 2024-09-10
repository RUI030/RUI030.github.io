# 551 Matrix Methods 

# Ch1

# Ch2
## Basic
### Vector

### Matrix
* 2D array of numbers
* organizing data
* represent linear operations (linear transform)
### Convolution
* **Definition**:
```math
\begin{equation}
y[n]=(f * g)[n] = \sum_{k=-\infty}^{\infty} f[k] \cdot g[n - k]
\end{equation} 
```
* Matrix Form:
```math
\begin{equation}
\mathbf{y = Hx}
\end{equation} 
```
where
```math
\mathbf{H}_{mn} = h[m-n]\mathbb{I}_{[0 \le m, n \lt K]}
```
* **Indicator Function**:
```math
\begin{equation}
\mathbb{I}_{\{statement\}} = 
\begin{cases} 
1 & \text{if statement is TRUE}, \\
0 & \text{otherwise}.
\end{cases}
\end{equation} 
```
* Size:
```math
\mathbf{H} \in \mathbb{C}^{M \times N}, \quad M = N + K - 1
```
## Matrix Structures
> CH2 P16~17
* Diagonal 對角線（左上~右下）
  🌰 uncorrelated vectors 的 covariance matrix 
* Upper Triangular 上三角（對角線上方）
  🌰 Gaussian elimination
* Lower Triangular 下三角（對角線下方）
  🌰 *Cholesky decomposition*
* Tridiagonal　對角線及其上下共三條
* Pentadiagonal　對角線及其上下２條共５條
* Upper Hessenberg
  eigenvalue algorithm
* Lower Hessenberg
### Matrix Classes
* **Full/Dense matrix**: 大部分的值 $\neq 0$
* **Sparse matrix**: 大部分的值 $= 0$
* **Tall**: $M>N$ 
* **Wide**: $M<N$ 
* **Diag{$\mathbf{x}$}**: 對角線是 $\mathbf{x}$ 其他是 0
* **Identity matrix** $\mathbf{I}$ : $\mathbf{I}_n$ 表示 $N \times N$ 斜對角線是 1、其餘值為 0 的矩陣
* ⭐ **Toeplitz**: 同條斜線上的值都一樣（Time/Shift Invariance）
> Matrix **A** is **Toeplitz** 
> $\Leftrightarrow a_{ij}$ have the form $a_{ij} = f(i-j)$ for some function $f : \mathbb{Z} \mapsto \mathbb{F}$.
* ⭐ **Circulant**: 下一個 row 是前一個 row 的數值右移一格（circular shifted right for 1 step）
> Matrix **A** is **Circulant** 
> $\Leftrightarrow$ **A** is $N \times N$ and $a_{ij}$ have the form $a_{ij} = f(mod(i-j,N))$ for some function $f : \{0,...,N-1\} \mapsto \mathbb{F}$.
* **Block Diagonal**: todo
* **Block Circulant**: todo
### Matrix Transpose and Symmetry
* ⭐ **Transpose** $\mathbf{A}^{\top}$:
* ⭐ **Hermitian Transpose** $\mathbf{A}'$:
    * aka Condjugate Transpose
    * aka Adjoint
    * **TRANSPOSE AND CONDJUGATE**
    * $\mathbf{A} \in \mathbb{C}^{M \times N}$
    * $[\mathbf{A'}]_{j,i}=[\mathbf{A}]^*_{i,j}$
* ⭐ **Symmetric**: $\mathbf{A}=\mathbf{A}^{\top}$
* ⭐ **Hermitian**: $\mathbf{A}=\mathbf{A}'$
    * aka Hermitian symmetric
    * 對角線 $\in \mathbb{R}$
      $\Leftarrow \mathbf{A}_{ii}=\mathbf{A}^*_{ii}$
---
todo: from 2.27
---
* **Orthogonal Vectors**: 所有向量彼此互相**垂直**
* **Orthonormal Vectors**: 所有向量彼此互相**垂直且長度為 1**
* ⭐ **Orthogonal Matrix**: $Q^{\top}Q=QQ^{\top}=I_N$
    * $Q \in \mathbb{R}^{N \times N} \Rightarrow$ 實數方陣
    * 包含於 Unitary Matrix 中（定義較嚴格）
* ⭐ **Unitary Matrix**: $Q'Q=QQ'=I_N$
    * $Q \in \mathbb{C}^{N \times N} \Rightarrow$ 方陣
    * Orthogonal Matrix 含虛數版本（定義較廣，不一定要有虛數）
    * 行列都是 **orthonormal** 💥長度要是 1💥
