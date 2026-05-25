# Algebraic View

This chapter explains gradient descent through its update formula. The goal is not to memorize symbols, but to understand what each part of the formula tells you to do.

If the notation feels new, read each formula as a sentence. The symbols are only a compact way to say: start where you are, check the direction of increasing loss, then step the other way.

## The main formula

Gradient descent updates the parameter as:

$$
\theta_{t+1} = \theta_t - \alpha \nabla J(\theta_t)
$$

where:

- $\theta_t$ is the current parameter value
- $\theta_{t+1}$ is the updated parameter value
- $J(\theta_t)$ is the current loss
- $\nabla J(\theta_t)$ is the gradient at the current step
- $\alpha$ is the learning rate

Here, the gradient is a slope-like quantity. It tells us whether increasing the parameter would increase or decrease the loss near the current point.

Read the formula like this:

1. start at the current parameter value $\theta_t$
2. check how the loss is changing there
3. move in the opposite direction of the gradient
4. scale the step using the learning rate $\alpha$

Because the gradient points in the direction of greatest increase, subtracting it moves us toward lower loss.

Even though the notation looks compact, the formula describes a simple step-by-step process.

## What each part means

This formula helps answer three important questions:

- **Why does the parameter change?** Because the loss is not yet minimal.
- **Which direction should it move?** In the negative gradient direction.
- **How far should it move?** By an amount controlled by the learning rate.

In one parameter, this means moving left or right along a curve. With many parameters, it means moving through a higher-dimensional loss surface. The update rule still works in the same way.

For example, a simple linear model may have a weight $w$ and a bias $b$. Gradient descent updates both:

$$
w_{t+1} = w_t - \alpha \frac{\partial J}{\partial w}
$$

$$
b_{t+1} = b_t - \alpha \frac{\partial J}{\partial b}
$$

This is not a new algorithm. It is the same update rule applied to more than one adjustable number.

## A compact textbook calculation

Consider the simple loss

$$
J(\theta) = (\theta - 3)^2.
$$

The derivative is

$$
\frac{dJ}{d\theta} = 2(\theta - 3).
$$

The derivative is the formula for the slope of this loss curve at any value of $\theta$.

If $\theta_0 = 0$ and $\alpha = 0.1$, then the first gradient is $-6$ and the first update is

$$
\theta_1 = 0 - 0.1(-6) = 0.6.
$$

The parameter moved right because the gradient was negative, so the negative-gradient direction was positive.

## Local information and repeated updates

The formula also shows why gradient descent is a local and iterative method.

- It uses the **current** parameter value, not the final answer.
- It uses the **current** gradient, not a full map of the whole surface.
- It updates once, then repeats from the new point.

That is why the path depends on both the starting point and the behavior of the loss function near that point.

## Predicting learning-rate behavior

The formula also helps you reason about convergence.

- If $\alpha$ is very small, each update changes $\theta$ only a little, so learning is slow.
- If $\alpha$ is moderate, the parameter usually moves steadily toward lower loss.
- If $\alpha$ is too large, the parameter can overshoot the minimum and oscillate.

In more than one dimension, large steps can also produce a zigzagging path instead of a smooth approach. The same issue is still a learning-rate issue.

## Batch, stochastic, and mini-batch updates

The update rule stays the same, but the gradient can be estimated using different amounts of data.

- **Batch gradient descent** uses the whole dataset before making one update. This can be stable, but slow for large datasets.
- **Stochastic gradient descent** uses one training example at a time. This is faster per update, but the path can be noisy.
- **Mini-batch gradient descent** uses a small group of examples. This is the common compromise in many machine learning systems.

For this beginner chapter, the main point is simple: all three variants still update parameters using a gradient and a learning rate. They mainly differ in how much data is used to compute each gradient.

## How to read the theory without a picture

Even without a graph, you can still reason about gradient descent theoretically:

- a larger gradient means a stronger local change in the loss
- a smaller gradient often appears closer to a minimum
- a larger learning rate makes longer updates
- a smaller learning rate makes shorter updates

These ideas are enough to explain many common training behaviors, even before seeing any code.

## Practical warning signs

When training a model, the loss should usually move downward over time. If the loss barely changes, the learning rate may be too small or the gradients may be too weak. If the loss jumps upward or oscillates strongly, the learning rate may be too large. These checks are not a replacement for the mathematics, but they help connect the formula to real training behavior.

## What to remember

- The update uses the **current** parameter value and the **current** gradient.
- The negative gradient gives the downhill direction.
- The learning rate controls step size.
- Near a minimum, the gradient often gets smaller, so the updates often get smaller too.
- Batch, stochastic, and mini-batch gradient descent use the same idea with different amounts of data per update.
