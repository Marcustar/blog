---
title: Data Analysis and Modeling
date:  2024-09-13
week:  5
weather: fine-day
---

## 01 

### SPSS 软件
https://www.statistical-analysis.top/SPSS/details.html?bd_vid=P16sn10dPjmknjTkP101nW03P-tkrj0kg17xnH0sg1wxrjT4n1TdnW0dnjc&bd_vid=8867787713203235694

https://www.ibm.com/cn-zh/spss



## 02-基本概念

### 相关性分析

**相关分析**用于检验变量间的关系，但**仅仅只能确定变量之间是否存在关系**，**而不能确定这一关系的\**方向性\****，例如X与Y之间存在显著正相关关系，但我们无法知道是X水平越高，Y水平随之越高，还是Y水平越高，X水平随之越高。如果想确定变量间关系的方向性，则需用到回归分析（Regression）分析。

[SPSS—线性回归分析_spss线性回归-CSDN博客](https://blog.csdn.net/m0_54401011/article/details/134045541)

### 回归分析

### 层次回归

采用层次回归，可以控制协变量的影响。 例如，我们想要控制X1和X2，研究X3和X4对Y的影响。



## 03-实操

[SPSS操作：简单线性回归（史上最详尽的手把手教程） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/27122905)

​							1

## 线性回归

Regression analysis can:

1. Indicate if independent variables have a significant relationship with a dependent

variable.

2. Indicate the relative strength of different independent variables’ effects on a

dependent variable.

3. Make predictions.  

Bigger deviances are weighted disproportionately high 。  
较大的偏差被加权过高。

Y = α + βX + e  

### R 方

 reflects the proportion of variance explained by the regression line 。 反映了回归线所解释的方差比例

### Steps in liner regression 

1. Recognize research question and formulate hypotheses 
2. Determine how many variables you are comparing and choose significance 
3. Data requirements and initial analysis 
4. check Assumptions
5. Models Estimation 
6. Interpretation and validation 
7. Report Results 

### significance level & p-value

显著性水平，假设检验中用来决定是否拒绝零假设。 如果 P 值小于这个显著性水平，拒绝零假设，有统计学意义（即有足够证据表明两组之前存在差异或某个效应是显著的）

零假设（null hypothesis），在统计学中通常用 H0*H*0 表示，是假设检验中的一个基本概念。它是一个研究假设，通常用来表示在没有观察到任何效应或差异的情况下的预期状态。零假设通常假设没有效应、没有差异或者没有关联。

P 值是在零假设 H0 为真的前提下，观测到的统计量或更极端情况出现的概率。它是一个介于 0 和 1 之间的数值，通常用于衡量结果的偶然性。
**P 值较小**：如果 P 值小于预先设定的显著性水平（如 0.05），则认为结果具有统计学意义，拒绝零假设，认为有足够证据支持研究假设。

F检验：即对方程是否有线性关系的检验。原假设 H0 没有线性关系。

t检验：

[p值是什么？数据科学家用最简单的方式告诉你 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/74698448?utm_oi=546095236863156224)

p 值越低，证据越令人惊讶，零假设越荒谬。

p 值越低，结果越有意义，因为它不太可能是由噪声引起的。

Dummy variables（虚拟变量或哑变量）是统计学和数据分析中常用的一种变量类型，用于处理分类数据或定性变量。在回归分析、机器学习模型和其他统计模型中，虚拟变量用于将非数值型数据（如性别、种族、国家等）转换为数值型数据，以便进行数学运算和模型构建。

### Data requirements 

1. sufficient samples 

Criteria 1 - Minimum between is 50+ 8 x N (N is number of
independent variables)

Criteria 2 - Minimum between is 104 + N (N is number of
independent variables)

Use what ever results in smaller number  

2. variable show variation 
3. no multi collinearity 非共线

## Check Assumptions 

1. model can be expressed linearly.
2. model expect mean error is zero.
3. errors variance is constant .
4. errors are independent.
5. errors need to be approximately normally distributed  
