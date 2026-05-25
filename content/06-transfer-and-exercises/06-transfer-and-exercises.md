# Common Questions for Both Conditions

This chapter contains shared questions that can be used after either instructional condition. The questions are written so they can be used with both the classic textbook-style material and the multiple-modalities material.

The questions assume no previous machine learning knowledge beyond the learning material. Use plain language where possible, and only use symbols when the question asks for a calculation.

This chapter does **not** include survey items about opinion, confidence, clarity, or cognitive load. Those should be collected separately.

## Part A: Core understanding

1. Explain the difference between a model parameter and a loss value.
2. What information does the gradient provide at the current parameter setting?
3. Why do we move in the negative gradient direction instead of the positive gradient direction?
4. What is the role of the learning rate?

## Part B: Compute by hand

Consider

$$
J(\theta) = (\theta - 4)^2.
$$

1. Compute $\frac{dJ}{d\theta}$.
2. Start from $\theta_0 = 0$ with $\alpha = 0.25$.
3. Compute $\theta_1$ and $\theta_2$.
4. State whether the loss is decreasing.
5. Repeat the same exercise with $\alpha = 1.2$. What changes?

## Part C: Reason about learning rate

Suppose a learner uses gradient descent correctly, but the updates repeatedly jump from one side of the minimum to the other.

1. What does this suggest about the learning rate?
2. Why can this happen even when the direction of movement is chosen correctly?
3. Would choosing a smaller learning rate always make progress faster? Explain.

## Part D: Apply the idea to a new example

Imagine a model with one parameter that is currently on the right side of a bowl-shaped loss curve.

1. If the slope there is positive, which direction should the parameter move?
2. If the slope magnitude is large, what does that suggest about the size of the update before the learning rate is applied?
3. If the slope becomes smaller near the bottom, what should happen to the updates?
4. Why does this make sense for optimization?

## Part E: Explain the process

Describe gradient descent as a step-by-step process for improving a parameter value.

Your explanation should mention:

- the current parameter value
- the loss
- the gradient
- the learning rate
- why the process is repeated

## Part F: Compare update variants

1. What is the difference between batch gradient descent and stochastic gradient descent?
2. Why might mini-batch gradient descent be a useful compromise?
3. If an optimization path looks noisy but still trends downward, which variant does that resemble most closely?

```{note}
These common questions are intended to assess the same concept after either instructional version.
```
