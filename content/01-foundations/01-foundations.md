# Foundations

Before looking at the formula, it helps to understand the problem gradient descent is trying to solve.

At a basic level, a **model** is a rule or system that makes a prediction. For example, a model might predict a house price, a test score, or whether an email looks like spam.

Models use adjustable numbers called **parameters**. Learning means changing those parameters so the predictions become better.

## Why do we need gradient descent?

A model usually does not start with perfect parameter values. It starts with an initial guess and then improves.

To improve the model, we need a way to answer this question:

> From the parameter values we have now, how should we change them to reduce the error?

Gradient descent is one answer. It uses local information about the current error and updates the parameters step by step.

## Parameters and loss

To measure how well a model is doing, we use a **loss function**. The loss tells us how wrong the model currently is.

So the learning problem is:

- choose parameter values
- measure the loss
- change the parameters to make the loss smaller

If the parameter is written as $\theta$ and the loss as $J(\theta)$, then the goal is to make $J(\theta)$ as small as possible.

In a simple example, $\theta$ can be one number. In a larger machine learning model, $\theta$ can stand for many parameters at once. The goal is the same in both cases: reduce the loss.

```{figure} ../figures/one-dimensional-descent.png
---
width: 70%
name: fig-foundations-one-dimensional-descent
---
A compact picture of gradient descent: start from a parameter value, measure the local slope of the loss curve, and move toward lower loss.
```

This is why gradient descent appears in many machine learning models. In linear regression it can adjust a weight and bias so a line fits data better. In neural networks it can adjust many weights so predictions become more accurate. The number of parameters changes, but the learning idea stays the same.

## The gradient

The **gradient** tells us how the loss is changing at the current parameter setting.

- In one dimension, it is the slope of the curve.
- In more dimensions, it points in the direction of steepest increase.

This gives the central idea:

- the gradient points uphill
- the negative gradient points downhill

Gradient descent follows the downhill direction because downhill means lower loss.

This is important for you as a learner: gradient descent does not need to know the whole loss surface in advance. It only uses information from the current position.

## Why the process is repeated

In most machine learning problems, we cannot jump directly to the best answer in one step.

Instead, gradient descent repeats a short cycle:

1. start from the current parameter value
2. measure the gradient there
3. take a small step downhill
4. repeat

That is why gradient descent is called an **iterative** method.

The starting point matters because the algorithm always begins from the current parameter value and then keeps updating from there.

## Learning rate

The **learning rate** controls the size of the step.

- If the learning rate is too small, progress is slow.
- If it is too large, the algorithm can overshoot and bounce around.
- If it is chosen reasonably, the loss tends to decrease in a stable way.

So even when the update direction is correct, the behavior can still look very different depending on the step size.

## Quick check

If you understand this chapter, you should already be able to answer:

- Why does a model need an optimization method at all?
- What does the loss measure?
- What information does the gradient provide?
- Why do we move in the negative gradient direction?
- Why does step size matter?
- Why can the same idea apply to both one parameter and many parameters?
- What is the difference between changing one parameter and changing many parameters?
