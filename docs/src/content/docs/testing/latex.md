---
title: LaTeX Markdown
description: A test of LaTeX
sidebar:
  order: 2
---

# LaTeX

#### _Important Note_

The way the precision percentage is calculated means that the absolute  
deviation is slightly asymmetric and ranges from a lower percentage for  
values of \( b \) lower than \( a \), and higher for values of \( b \) higher than \( a \).

For example, for what range of values of \( b \) will the following  
calculation return 1:

```
calc/IFEQUALS(100,b,1,0,20%) = 1
```

This means finding the highest and lowest values of \( b \) that make the  
following expression evaluate to 20:

$$
\left| \frac{100 - b}{\frac{100 + b}{2}} \right| \cdot 100
$$

Evaluating this gives:

$$
81.8 < b < 122.2
$$

Which, as a percentage of 100, ranges from \( 18.2\% \) below up to \( 22.2\% \) above.

---

#### _Examples_

Using an absolute value of 20 for the precision returns the ifTrue result:

```
calc/IFEQUALS(80,100,1,0,20) = 1
```

because the difference is:

$$
\left| 80 - 100 \right| = 20
$$

Using a percentage of 20% as the precision returns the ifFalse value:

```
calc/IFEQUALS(80,100,1,0,20%) = 0
```

because the difference is:

$$
\left| \frac{80 - 100}{\frac{80 + 100}{2}} \right| = \frac{20}{90} = 22.2\%
$$

---
