# Senior AI / LLM Systems Engineer Roadmap (12–15 Months)

For your goal (**Senior AI / LLM Systems Engineer**) and your learning style (**theory-deep, invariant-driven, book-oriented**), I would drastically reduce resource sprawl.

Most people fail because they try to follow **20–30 resources simultaneously**.

Instead, focus on **8 primary resources** and follow them with discipline.

---

# Phase 1: Mathematical Foundations (2 Months)

## 1. Linear Algebra

### Primary Resource
**Gilbert Strang — Introduction to Linear Algebra**

### Study
- Chapters 1–7
- Chapters 9–10

### Skip
- Most proof-heavy sections
- Advanced applications unrelated to ML

### Duration
**6 weeks**

### Goal
Become comfortable with:

- Vector spaces
- Linear transformations
- Projections
- Least squares
- Eigenvalues and eigenvectors
- Singular Value Decomposition (SVD)

---

## 2. Probability

### Primary Resource
**Harvard Stat 110 (Joe Blitzstein)**

### Use
- Lectures
- Course notes

### Avoid
- Solving every problem set

### Duration
**3 weeks**

### Goal
Understand:

- Random variables
- Expectation
- Variance
- Conditional probability
- Bayes' theorem
- Likelihood

---

## 3. Optimization

### Resource
**Convex Optimization (Boyd) — Summary Notes**

### Read
- Convex sets
- Gradient descent
- Constrained optimization
- Lagrange multipliers

### Duration
**1 week**

### Goal
Learn the optimization concepts required for machine learning and LLM engineering.

> You do **not** need the full Boyd book for this path.

---

# Phase 2: Core Machine Learning (2 Months)

## Primary Resource
**Stanford CS229**

Website:
https://cs229.stanford.edu

### Use
- Lecture notes
- Lectures

### Ignore
- Assignments
- Most mathematical proofs

### Duration
**8 weeks**

### Goal

By the end, you should understand:

- Linear regression
- Logistic regression
- Classification
- Bias–variance tradeoff
- Regularization
- PCA
- Clustering
- EM algorithm

Focus on **understanding concepts deeply**, not maximizing assignment scores.

---

# Phase 3: Deep Learning Bridge (1 Month)

You do **not** need Andrew Ng's Deep Learning Specialization.

## Resource 1: Dive Into Deep Learning (D2L)

Website:
https://d2l.ai

### Read Only
- Preliminaries
- Linear Neural Networks
- Multilayer Perceptrons (MLPs)
- Deep Learning Computation
- Modern CNNs (skim)
- RNNs (overview only)
- Attention Mechanisms

### Duration
**2 weeks**

---

## Resource 2: Build a Large Language Model From Scratch

**Sebastian Raschka**

### Read
- Entire book

### Duration
**2 weeks**

### Purpose

This book serves as the bridge between:

```text
CS229
   ↓
Deep Learning
   ↓
Transformer Internals
   ↓
CS336
```

Do not obsess over exercises. Focus on understanding how LLMs are built and trained.

---

# Phase 4: LLM Internals and Systems (3 Months)

## Primary Resource
**Stanford CS336**

This becomes the centerpiece of your entire roadmap.

### Use
- Lectures
- Notes
- Reading materials

### Duration
**12 weeks**

### Recommendation
Ignore almost every other LLM course while studying CS336.

---

## Secondary Resource
**Stanford CME 295**

Use only as a companion resource.

### Suggested Timing

#### Before CS336
- Lectures 1–4

#### During CS336
- Lectures 5–6

#### Before Agent Systems
- Lecture 7

#### Before Evaluation
- Lecture 8

### Total Time
**10–12 hours**

Treat this as revision material, not a separate course.

---

# Phase 5: Information Retrieval (2 Months)

Retrieval is one of the highest-ROI skills for modern AI engineers.

## Primary Resource

**Introduction to Information Retrieval**  
*Manning, Raghavan, Schütze*

### Read
- Chapters 1–8
- Chapters 12–14

### Skip
- Most advanced IR theory

### Duration
**4 weeks**

---

## Dense Retrieval

### Resource
**Full Stack Retrieval**

Website:
https://fullstackretrieval.com

### Read
- Dense retrieval
- Ranking
- Hybrid retrieval
- RAG

### Duration
**2 weeks**

---

## Modern Retrieval Papers

### Must Read
- DPR
- Sentence-BERT
- ColBERT

### Duration
**2 weeks**

---

# Phase 6: Agent Systems (2 Months)

Avoid reading dozens of papers.

Read a small set deeply.

## Tool Use

### Papers
- ReAct
- Toolformer
- MRKL
- WebGPT

---

## Planning

### Papers
- Plan-and-Solve
- Tree of Thoughts
- LLM Compiler

---

## Memory

### Papers
- MemGPT
- Generative Agents

---

## Reflection

### Papers
- Reflexion
- Self-Refine

### Duration
**6 weeks**

---

## Agent Engineering

### Study
- Anthropic Agent Engineering Guide
- OpenAI Agent Guides
- LangGraph Documentation

### Duration
**2 weeks**

---

# Phase 7: Frameworks (1 Month)

## LangGraph (Primary Focus)

### Read
- Entire official documentation

### Duration
**2 weeks**

---

## LangChain

### Read Only
- Models
- Messages
- Tools
- Retrievers
- Structured Outputs

### Duration
**1 week**

---

## DSPy

### Read
- Official tutorials

### Duration
**1 week**

---

# Phase 8: Evaluation (1 Month)

This is arguably the most neglected skill in AI engineering.

After CS336, it may be the highest-ROI topic in the roadmap.

## Primary Resource

**Hamel Husain's LLM Evaluation Guide**

### Read
- Entire guide

---

## Secondary Resource

**LangSmith Evaluation Documentation**

### Read
- Selectively

---

## Optional

**MLflow Evaluation Documentation**

### Duration
**4 weeks**

---

# Phase 9: Serving and Production AI (2 Months)

## FastAPI

### Resource
Official Documentation

### Duration
**1 week**

---

## vLLM

### Read
- Official Documentation

### Duration
**2 weeks**

---

## Ray Serve

### Read
- Official Documentation

### Duration
**1 week**

---

## Kubernetes

### Learn Only
- Pods
- Deployments
- Services
- Ingress
- Autoscaling

### Duration
**2 weeks**

---

## Observability

### Read
- OpenTelemetry Documentation
- MLflow Tracking Concepts

### Duration
**2 weeks**

---

# Parallel Track: Distributed Systems (3 Months)

Because you're already studying **Linux, Operating Systems, and systems internals**, this parallel track will give you a significant advantage over most AI engineers.

## Primary Resource

**Designing Data-Intensive Applications (DDIA)**  
*Martin Kleppmann*

### Read
- Cover to cover

### Duration
**3 months (parallel to CS336)**

### Why It Matters

This is probably the **highest-ROI non-AI book** for becoming a Senior AI Systems Engineer.

You'll learn:

- Storage systems
- Replication
- Partitioning
- Consistency
- Distributed transactions
- Stream processing
- Scalability patterns

---

# Final Resource List (The Essential 8)

If everything had to be reduced to the absolute minimum, these are the only resources I would keep:

1. **Gilbert Strang — Introduction to Linear Algebra**
2. **Harvard Stat 110**
3. **Stanford CS229**
4. **Dive Into Deep Learning (selected chapters)**
5. **Build a Large Language Model From Scratch (Raschka)**
6. **Stanford CS336**
7. **Introduction to Information Retrieval**
8. **Designing Data-Intensive Applications (DDIA)**

---

# Priority Ranking (Highest ROI)

If your goal is maximum return over the next **12–15 months**, I'd rank the resources as follows:

1. **Stanford CS336**
2. **Designing Data-Intensive Applications (DDIA)**
3. **Introduction to Information Retrieval**
4. **Stanford CS229**
5. **Gilbert Strang — Introduction to Linear Algebra**
6. **Harvard Stat 110**
7. **Build a Large Language Model From Scratch**
8. **Dive Into Deep Learning (D2L)**

---

# Guiding Principle

```text
Math Foundations
       ↓
Machine Learning
       ↓
Deep Learning
       ↓
LLM Internals (CS336)
       ↓
Retrieval
       ↓
Agents
       ↓
Evaluation
       ↓
Production Systems
       ↓
Senior AI / LLM Systems Engineer
```

## Core Philosophy

> A small number of world-class resources studied deeply will outperform a massive collection of partially completed courses, books, and papers.

**Depth > Breadth.**  
**Mastery > Resource Collection.**  
**Systems Thinking + LLM Internals + Retrieval + Production Engineering = Senior AI / LLM Systems Engineer.**
