---
numbering:
  headings: false
---

# Gradient Descent Cheatsheet

- **Loss:** a number that says how wrong the model currently is.
- **Parameter:** a value the model can adjust to improve its predictions.
- **Gradient:** local information about how the loss changes when a parameter changes.
- **Learning rate:** the step-size choice that controls how large each update is.
- **Update rule:** move the parameter in the opposite direction of the gradient.
- **Too small learning rate:** progress is stable but slow.
- **Too large learning rate:** updates can overshoot the minimum or become unstable.
- **Repeated updates:** gradient descent improves parameters by applying the same local rule again and again.
