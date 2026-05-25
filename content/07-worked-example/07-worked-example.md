# Worked Algebraic Example

This chapter gives a solved example of gradient descent one step at a time. You do not need to know machine learning first; the goal is simply to see how one number changes when the update rule is repeated.

Use the **Next** button in the activity to reveal the calculation gradually. Try to predict each missing piece before you move forward.

+++{"no-pdf": true}
::::{div}
:class: worked-example-stepper-embed

```{iframe} ../../_static/worked-example-stepper.html
:width: 100%
:title: Step-by-step worked gradient descent example

Interactive worked example for gradient descent.
```

::::
+++

## What to notice

- the parameter changes a little at each step
- the movement is in the negative gradient direction
- the gradient becomes smaller as the parameter gets closer to the minimum
- the updates become smaller for the same reason
- the same learning rule is being repeated each time rather than solved in one jump

In a real dataset, the gradient may be computed from all examples, one example, or a small batch of examples. That changes how smooth or noisy the path looks, but the update rule in this worked example is still the basic rule underneath those variants.
