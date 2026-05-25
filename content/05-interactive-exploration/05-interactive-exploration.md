# Interactive Exploration

+++{"no-pdf": true}
```{iframe} ../../_static/gradient-descent-demo.html
:width: 100%
:title: Gradient descent interactive demo

Interactive gradient descent demo.
```
+++

## Exploration tasks

Use the demo to connect the formula, the picture, and your own predictions. Try to explain every change you see using the words **parameter**, **loss**, **gradient**, and **learning rate**.

### Task 1: Predict the next step

Choose a simple bowl-shaped loss such as $J(\theta) = (\theta - 3)^2$.

Before pressing the next update, ask:

- Is the current slope positive or negative?
- Which direction should the parameter move?
- Will the next step be small or large?

Then compare your prediction with what the demo shows.

### Task 2: Compare learning rates

Keep the same starting point and try three learning rates:

- a very small value
- a moderate value
- a value that is too large

Record what changes in:

- the size of the updates
- the number of iterations needed
- whether the path converges smoothly or oscillates

### Task 3: Compare update modes

Keep the learning rate and starting point fixed. Switch between deterministic gradient descent and noisy stochastic-style updates.

Ask:

- Which path looks smoother?
- Which path wiggles more?
- Why can noisy updates still move toward lower loss overall?

This illustrates the difference between batch, stochastic, and mini-batch gradient descent. Batch-style updates are smoother because they use more data for each gradient. Stochastic-style updates can be noisier because each update uses less information. Mini-batch updates sit between those two ideas.

### Task 4: Change the starting point

Change the starting point while keeping the same objective and learning rate.

Ask:

- Does the path still head toward the minimum?
- How different are the first few updates?
- Where does the algorithm slow down most clearly?

This helps you see that gradient descent depends on both the starting position and the local shape of the loss function.

### Task 5: Translate between representations

After exploring, explain the same update in three ways:

- with the formula
- with a picture of the path
- with the hiker analogy

If you can move between those three representations, you are building the kind of flexible understanding that this book targets.

### Task 6: Apply the idea to a new case

Invent your own simple example of a loss curve.

Describe:

- where the parameter starts
- which way downhill is
- what a small learning rate would do
- what a learning rate that is too large would do

Across all six tasks, focus on the same core questions: why gradient descent is used, what the main terms mean, how the update works, how the learning rate affects behavior, how update variants differ, and how to apply the idea in a new case.
