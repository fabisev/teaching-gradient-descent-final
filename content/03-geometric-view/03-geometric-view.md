# Geometric Visualization

This chapter introduces gradient descent through pictures and movement. No previous machine learning knowledge is needed.

A **model** is a rule or system that makes predictions. A model usually does not know the best adjustable values, called **parameters**, at the beginning. Gradient descent starts from an initial guess, checks how the error is changing, moves toward lower error, and repeats.

## The key ideas before the picture

Four ideas matter throughout gradient descent:

- **parameters** are the values the model can change
- **loss** measures how wrong the model currently is
- **gradient** tells us how the loss changes at the current point
- **learning rate** controls how large each update is

The geometric view does not change these ideas. It only makes them easier to imagine.

## The one-dimensional picture

If we plot the loss against a single parameter, we get a curve.

::::{div}
:class: geometry-embed geometry-embed-one-dimensional

```{iframe} ../../_static/geometric-one-dimensional.html
:width: 100%
:title: Interactive one-dimensional gradient descent visualization

A one-dimensional loss curve with successive gradient descent updates. Each step shows how the current parameter moves toward lower loss.
```

::::

- A positive slope means the curve goes upward to the right.
- A negative slope means the curve goes downward to the right.
- A slope near zero means the curve is locally flat.

Gradient descent checks the local slope and then moves downhill. In one dimension, this means:

- if the slope is positive, move left
- if the slope is negative, move right
- if the slope is close to zero, we may be near a minimum

So even in picture form, the same theory still holds: the algorithm uses local information at the current point and then updates the parameter.

## The two-dimensional picture

With two parameters, the loss becomes a surface. A useful way to visualize that surface is with **contour lines**, like a topographic map.

::::{div}
:class: geometry-embed geometry-embed-contour

```{iframe} ../../_static/geometric-contour-descent.html
:width: 100%
:title: Interactive contour gradient descent visualization

Contour lines for a two-parameter loss surface. The path shows how repeated updates move across the surface toward the minimum.
```

::::

- each point represents one parameter setting
- each contour joins points with equal loss
- closely spaced contours indicate a steeper region

At any point, the gradient is perpendicular to the contour line and points uphill most strongly. The negative gradient points downhill.

The picture and the update rule describe the same movement: use the local slope, then step downhill.

## What the path looks like

Gradient descent does not jump directly to the bottom. Instead, it creates a path:

1. start from an initial point
2. measure the gradient there
3. take a downhill step
4. repeat

The path often bends because the steepest downhill direction changes from point to point.

The starting point matters because the path begins wherever the current parameter value is.

## Learning rate as a visual idea

One of the clearest things a picture can show is the effect of the learning rate.

::::{div}
:class: geometry-embed geometry-embed-learning-rate

```{iframe} ../../_static/geometric-learning-rate.html
:width: 100%
:title: Interactive learning-rate comparison visualization

An optimization path on the same loss curve. Use the learning-rate slider to see how small, moderate, and large steps change the path.
```

::::

### If the learning rate is too small

- the steps are tiny
- the path makes progress, but slowly
- many iterations may be needed

### If the learning rate is reasonable

- the path moves steadily toward lower loss
- the updates are visible but controlled
- the steps often get smaller near the minimum

### If the learning rate is too large

- the path may jump across the valley
- the updates may oscillate
- the method may fail to settle down

This is an important connection between picture and formula: changing $\alpha$ changes the shape of the optimization path.

In other words, even when the direction is correct, the step size still determines whether learning is slow, stable, or unstable.

## Connecting picture and formula

When you look at a graph of gradient descent, ask these four questions:

- Where is the current parameter value?
- Which direction is uphill?
- Which direction is the negative gradient?
- How long is the step, and what does that suggest about the learning rate?

If you can answer those questions, you are successfully connecting the picture to the update rule.
