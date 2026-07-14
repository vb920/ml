12-Day Revision Sprint for Senior AI / LLM Systems Engineering

Since you have already completed the roadmap, do not reread every resource from beginning to end. In 10–12 days, your objective should be to:

Reconstruct the important ideas from memory.
Identify and repair weak areas.
Connect concepts across math, ML, LLMs, retrieval, agents, evaluation, and production.
Practise explaining system-design decisions at a Senior Engineer level.
Produce a compact revision notebook that remains useful afterward.

Think of this as knowledge consolidation and interview readiness, not another learning cycle.

Recommended Daily Structure: 6–8 Hours

Use the same structure each day.

Block 1 — Closed-Book Reconstruction: 60–75 minutes

Before opening any book or notes:

Write everything you remember about the day’s topic.
Draw the architecture or mathematical derivation.
List important invariants.
Write down anything you cannot explain clearly.

This is the most important block.

Retrieval from memory strengthens understanding more effectively than passive rereading.

Block 2 — Targeted Revision: 2–2.5 hours

Open your existing notes and primary resources only after reconstruction.

Focus on:

Incorrect recollections
Missing connections
Mathematical assumptions
System trade-offs
Failure modes
Implementation details you have forgotten

Do not reread entire chapters.

Block 3 — Engineering/Application: 1.5–2 hours

Complete one practical exercise:

Derive an algorithm
Trace a model manually
Design an architecture
Debug a hypothetical production problem
Analyse performance
Explain an implementation
Write minimal pseudocode or Java/Python code only where useful
Block 4 — Senior-Level Explanation: 60–90 minutes

Answer 4–6 questions aloud, as if you were in an interview.

Structure every answer as:

1. Problem and requirements
2. Core concept or architecture
3. Important invariant
4. Trade-offs
5. Failure modes
6. Measurement and observability
7. Production decision


Record yourself if possible.

Block 5 — Compression: 45–60 minutes

At the end of each day, produce:

One two-page topic summary
One architecture diagram
Ten recall questions
Five important invariants
Three production failure scenarios

By Day 12, these become your permanent revision pack.

Day 1 — Linear Algebra, Probability, and Optimization
Objective

Recover only the mathematical machinery needed to reason about ML and LLM systems.

Linear Algebra

Revise:

Vectors, matrices, rank and basis
Linear transformations
Orthogonality and projections
Least-squares approximation
Eigenvalues and eigenvectors
Positive-semidefinite matrices
Singular Value Decomposition
Matrix norms
Change of basis
Low-rank approximation
Important derivations

Reconstruct:

Normal equation:
XTXθ=XTyX^TX\theta = X^Ty
Projection matrix:
P=X(XTX)−1XTP = X(X^TX)^{-1}X^T
SVD:
A=UΣVTA = U\Sigma V^T
Why the best rank-kk approximation retains the largest singular values.
LLM connections

You should be able to explain:

Embeddings as vectors in learned representation spaces
Attention as similarity, weighted aggregation and projection
Why scaling dot products matters
Low-rank adaptation in LoRA
PCA versus learned embeddings
Matrix rank and model expressiveness
Numerical conditioning during training
Probability

Revise:

Random variables
Joint, marginal and conditional distributions
Expectation, variance and covariance
Independence versus conditional independence
Bayes’ theorem
Maximum likelihood estimation
Cross-entropy
KL divergence
Sampling
Calibration

Important identity:

H(p,q)=H(p)+DKL(p∥q)H(p,q) = H(p) + D_{\mathrm{KL}}(p\|q)

Explain why minimizing cross-entropy with respect to qq minimizes KL divergence when pp is fixed.

Optimization

Revise:

Gradients and directional derivatives
Convexity
Gradient descent and stochastic gradient descent
Momentum and Adam
Learning-rate schedules
Lagrange multipliers
Constrained optimization
Saddle points
Gradient clipping
Mixed-precision instability
End-of-day output

Create one sheet titled:

Mathematical Invariants Behind Modern LLMs

Include:

Dimensions must remain valid through every matrix operation.
Probability distributions must be non-negative and sum to one.
Optimization updates are estimates, not guaranteed improvements in non-convex settings.
Numerical representation affects optimization behaviour.
Similarity is meaningful only relative to the representation space and metric.
Day 2 — Core Machine Learning
Objective

Reconstruct the general ML framework beneath deep learning.

Topics
Supervised learning
Linear regression
Logistic regression
Loss functions
Maximum likelihood interpretation
Regularization
Feature engineering
Decision boundaries
Generalization
Training, validation and test sets
Bias–variance trade-off
Underfitting and overfitting
Data leakage
Distribution shift
Cross-validation
Calibration
Class imbalance
Metrics selection
Unsupervised learning
K-means
PCA
Gaussian mixture models
Expectation-Maximization
Latent-variable models
Required derivations

Reconstruct:

Linear regression objective
Logistic regression likelihood
Binary cross-entropy
L1L_1 versus L2L_2 regularization
PCA as maximum-variance projection
EM’s alternating estimation structure
Senior-level questions

Be able to answer:

Why can validation performance improve while production performance deteriorates?
When is accuracy a misleading metric?
How would you detect train–serve skew?
Why does regularization help generalization?
How is maximum likelihood related to cross-entropy?
How would you debug a classifier whose offline metrics are good but business outcomes are poor?
Practical exercise

Design an ML experimentation lifecycle:

Problem definition
    ↓
Dataset construction
    ↓
Baseline
    ↓
Training
    ↓
Offline evaluation
    ↓
Error analysis
    ↓
Deployment
    ↓
Online evaluation
    ↓
Monitoring and retraining


For every stage, list at least two possible failure modes.

Day 3 — Neural Networks and Deep-Learning Mechanics
Objective

Bridge classical ML to transformers without spending excessive time on CNNs or RNNs.

Topics
Perceptron and MLP
Computational graphs
Forward and backward propagation
Chain rule
Activation functions
Initialization
Normalization
Dropout
Residual connections
Optimizers
Batch construction
Representation learning
Vanishing and exploding gradients
Required reconstruction

Draw a two-layer neural network and derive:

Forward pass
Loss
Gradient flow
Parameter-update path

You do not need to perform pages of algebra. You must understand where every gradient comes from and why its shape is correct.

Compare
ReLU versus GELU
Batch normalization versus layer normalization
SGD versus Adam
Pre-norm versus post-norm
Full precision versus mixed precision
Deep networks with and without residual connections
Practical debugging scenarios

Explain what you would inspect when:

Loss becomes NaN.
Loss is not decreasing.
Training loss decreases but validation loss increases.
GPU utilization is low.
Gradients become zero.
Training is unstable after increasing batch size.
Checkpoint resumption changes training behaviour.
End-of-day output

Create a one-page map:

Data
  ↓
Forward computation
  ↓
Loss
  ↓
Automatic differentiation
  ↓
Gradient transformation
  ↓
Optimizer state
  ↓
Parameter update
  ↓
Checkpoint


Annotate where numerical, data and distributed failures can occur.

Day 4 — Transformer and LLM Internals
Objective

Reconstruct a decoder-only transformer end to end.

This is one of the most important days.

Topics
Tokenization
Token embeddings
Positional information
Self-attention
Causal masking
Multi-head attention
Feed-forward networks
Residual stream
Layer normalization
Output projection
Softmax
Next-token prediction
Weight tying
Context windows
KV cache
Sampling and decoding
Derive self-attention

Starting from input XX:

Q=XWQ,K=XWK,V=XWVQ=XW_Q,\qquad K=XW_K,\qquad V=XW_V A=softmax⁡(QKTdk+M)A=\operatorname{softmax}\left(\frac{QK^T}{\sqrt{d_k}}+M\right) O=AVO=AV

Be able to explain:

Every tensor’s dimensions
Why 1/dk1/\sqrt{d_k} is used
How the causal mask works
What each attention head can learn
Why attention has quadratic sequence complexity
Why the KV cache improves autoregressive generation
Why the KV cache consumes substantial memory
Tokenization

Revise:

Byte-level tokenization
BPE or similar subword methods
Vocabulary size trade-offs
Special tokens
Multilingual behaviour
Tokenization’s effect on latency and cost
Decoding

Compare:

Greedy decoding
Temperature
Top-kk
Top-pp
Beam search
Repetition penalties
Structured/constrained decoding
Practical output

Draw a complete decoder-only LLM pipeline:

Text
  ↓
Tokenizer
  ↓
Token IDs
  ↓
Embeddings + positions
  ↓
N × Transformer blocks
  ↓
Final normalization
  ↓
Vocabulary logits
  ↓
Sampling
  ↓
Next token


Add tensor dimensions for batch size BB, sequence length TT, hidden dimension DD, number of heads HH, and vocabulary size VV.

Day 5 — LLM Training and Distributed Training
Objective

Revise CS336’s highest-value systems concepts.

Topics
Pretraining data pipeline
Deduplication
Filtering
Tokenization
Packing
Batch construction
Scaling laws
Compute and data trade-offs
Optimizer state
Mixed-precision training
Gradient accumulation
Gradient checkpointing
Data parallelism
Tensor parallelism
Pipeline parallelism
Sequence/context parallelism
Sharding
Checkpoints
Fault tolerance
Memory accounting

For a model, reason separately about:

Parameter memory
Gradient memory
Optimizer-state memory
Activation memory
Temporary buffers
Communication buffers

Do not memorize only a single “bytes per parameter” number. Explain why the number changes with:

Precision
Optimizer
Sharding stage
Activation checkpointing
Training versus inference
Communication reasoning

Understand:

All-reduce
All-gather
Reduce-scatter
Communication volume
Compute–communication overlap
Stragglers
Network topology
Collective-operation bottlenecks
Senior-level scenarios
Training throughput drops after scaling from 8 to 64 GPUs. Why?
One rank repeatedly runs out of memory. What would you inspect?
Checkpoint loading takes too long. How would you redesign it?
Training diverges after changing parallelism configuration.
GPU utilization is high but useful tokens per second are low.
Data loading intermittently stalls all workers.
Daily artifact

Build a decision chart:

The model does not fit
    ├── Reduce sequence or batch size
    ├── Gradient accumulation
    ├── Activation checkpointing
    ├── Shard optimizer/parameters
    ├── Tensor parallelism
    └── Pipeline parallelism

The model fits but training is slow
    ├── Profile input pipeline
    ├── Measure communication
    ├── Improve kernel efficiency
    ├── Increase arithmetic intensity
    ├── Overlap communication
    └── Fix stragglers

Day 6 — Information Retrieval and RAG
Objective

Master retrieval as an end-to-end system, not merely a vector database API.

Classical IR

Revise:

Inverted indexes
Term frequency
Document frequency
TF-IDF
BM25
Boolean retrieval
Postings lists
Compression
Query processing
Precision and recall
Mean Reciprocal Rank
Mean Average Precision
nDCG
Dense retrieval

Revise:

Bi-encoders
Cross-encoders
Sentence-BERT
DPR
ColBERT
Contrastive learning
Positive and negative examples
Hard-negative mining
Approximate nearest-neighbour search
Compare architectures
Bi-encoder
Fast retrieval
Documents can be pre-encoded
Weaker query–document interaction
Cross-encoder
Rich query–document interaction
More accurate ranking
Too expensive for full-corpus retrieval
ColBERT-style late interaction
Token-level interaction
Better expressiveness than a single-vector bi-encoder
Higher storage and computational cost
RAG pipeline
Documents
  ↓
Parsing and cleaning
  ↓
Chunking
  ↓
Metadata enrichment
  ↓
Embedding and indexing
  ↓
Candidate retrieval
  ↓
Filtering
  ↓
Reranking
  ↓
Context construction
  ↓
Generation
  ↓
Citation/attribution
  ↓
Evaluation and feedback

Critical topics
Chunking strategies
Chunk overlap
Metadata filters
Hybrid search
Query rewriting
Multi-query retrieval
Reranking
Context-window allocation
Lost-in-the-middle behaviour
Freshness
Access control
Index updates
Citation correctness
Failure decomposition

When a RAG answer is wrong, classify the error:

The required information does not exist in the corpus.
Parsing destroyed the information.
Chunking separated essential context.
Retrieval did not find the relevant chunks.
Reranking discarded them.
Context construction truncated or buried them.
The model ignored the evidence.
The model generated unsupported claims.
The evaluation incorrectly classified the response.

This decomposition is extremely important in interviews and production debugging.

Day 7 — Agents and Tool-Using Systems
Objective

Unify the papers into a small number of reusable system patterns.

Do not revise each paper as an isolated object.

Pattern 1 — Reason and act

Associated ideas:

ReAct
MRKL
Toolformer
Web-based tool use

Understand:

Tool selection
Argument generation
Observation handling
Error recovery
Tool-result validation
Pattern 2 — Plan and execute

Associated ideas:

Plan-and-Solve
Tree of Thoughts
LLM Compiler

Understand:

Explicit planning
Task decomposition
Dependency graphs
Parallel tool calls
Replanning
Plan termination
Pattern 3 — Memory

Associated ideas:

MemGPT
Generative Agents

Separate:

Working memory
Conversation history
Episodic memory
Semantic memory
External knowledge
Procedural state

Study:

Memory writing
Retrieval
Summarization
Forgetting
Conflict resolution
Privacy
Tenant isolation
Pattern 4 — Reflection

Associated ideas:

Reflexion
Self-Refine

Understand when reflection:

Improves an answer
Merely increases latency
Reinforces an incorrect assumption
Needs an external verifier
Should be bounded by iteration limits
Agent invariants

Your agent design should guarantee:

Tool arguments are schema-valid.
Side-effecting operations require stronger controls.
Retries are bounded.
Every execution has a termination condition.
Tool outputs are treated as untrusted input.
State transitions are observable.
Operations are idempotent where possible.
Authorization is checked at execution time, not merely planning time.
The model cannot silently expand its own permissions.
Practical exercise

Design an enterprise support agent with:

Retrieval
Ticket lookup
Ticket creation
Human escalation
Conversation memory
Evaluation
Audit logs

Explicitly define:

State graph
Tools
Retry policy
Timeout policy
Approval gates
Idempotency keys
Failure recovery
Security boundaries
Day 8 — Evaluation
Objective

Build a rigorous evaluation mindset across models, RAG and agents.

This should be another high-priority day.

Evaluation hierarchy
Business outcome
    ↓
User task success
    ↓
End-to-end system quality
    ↓
Component quality
    ↓
Model-level metrics


Avoid optimizing a low-level metric without showing how it relates to user value.

Topics
Dataset creation
Production-log sampling
Golden datasets
Human annotation
Annotation rubrics
Inter-annotator disagreement
Slice-based evaluation
Pairwise evaluation
Pointwise scoring
LLM-as-judge
Reference-based evaluation
Reference-free evaluation
Online experiments
Regression testing
Cost and latency evaluation
RAG evaluation

Measure components separately.

Retrieval
Recall@kk
Precision@kk
MRR
nDCG
Relevant-context coverage
Generation
Correctness
Relevance
Completeness
Faithfulness
Citation accuracy
Style and policy compliance
End-to-end
Task success
User satisfaction
Escalation rate
Resolution time
Cost per successful task
Latency distribution
Agent evaluation

Evaluate:

Tool-selection accuracy
Argument correctness
Number of steps
Task-completion rate
Recovery from tool errors
Unnecessary tool calls
Unsafe actions
State consistency
Cost
Latency
Human-escalation quality
LLM-as-judge limitations

Be prepared to discuss:

Position bias
Verbosity bias
Self-preference
Prompt sensitivity
Weak domain knowledge
Correlated errors
Score calibration
Need for human audit
Practical output

Create an evaluation plan for the enterprise support agent from Day 7.

It should contain:

50–100 initial golden cases
Normal cases
Edge cases
Adversarial cases
Tool-failure cases
Permission cases
Multi-turn cases
Regression gates
Online metrics
Human-review strategy
Day 9 — LLM Serving and Inference Systems
Objective

Understand serving from request arrival to token streaming.

Topics
Prefill versus decode
KV cache
Continuous batching
Dynamic batching
Paged attention
Memory fragmentation
Quantization
Tensor parallel inference
Speculative decoding
Prefix caching
Structured outputs
Streaming
Rate limiting
Admission control
Backpressure
Multi-tenancy
Metrics

Know the difference between:

Time to first token
Inter-token latency
End-to-end latency
Tokens per second
Requests per second
Goodput
Batch size
Queueing time
Prefill time
Decode time
GPU utilization
KV-cache occupancy

Use percentiles:

p50
p95
p99

Averages alone are insufficient.

Key trade-offs
Throughput versus latency

Larger batches typically improve hardware utilization but can increase waiting time.

Long-context versus concurrency

Long sequences consume more KV-cache capacity and can reduce the number of concurrent requests.

Quantization versus quality

Lower precision may reduce memory and improve serving efficiency, but quality and kernel support must be evaluated.

Streaming versus total completion time

Streaming may improve perceived responsiveness even when total generation time is unchanged.

Practical scenario

Design a service for:

One large instruction model
Streaming responses
Mixed prompt lengths
99.9% availability target
Burst traffic
Per-tenant quotas
Tool-integrated requests

Explain:

Request routing
Batching
Autoscaling
Load shedding
Timeouts
Retries
Model replicas
KV-cache considerations
Failure isolation
Monitoring
Capacity planning
Day 10 — Distributed Systems and Production Architecture
Objective

Apply DDIA concepts directly to LLM systems.

Topics
Replication
Partitioning
Consistency
Availability
Transactions
Idempotency
Event ordering
Queues and streams
Backpressure
Caching
Materialized views
Batch versus stream processing
Fault tolerance
Exactly-once claims
Schema evolution
Multi-region systems
Map DDIA to AI systems
DDIA concept	AI/LLM applicationReplication	Model-serving replicas and index replicas
Partitioning	Vector-index shards and tenant partitioning
Consistency	Freshness of documents, prompts and memory
Transactions	Tool actions and workflow state
Idempotency	Safe retries for agent operations
Streams	Evaluation events, audit logs and feedback pipelines
Materialized views	Precomputed embeddings and retrieval indexes
Backpressure	Admission control and queue management
Schema evolution	Changes in prompts, tools, events and model outputs
Important scenarios
A document changes, but RAG continues returning the old version.
Agent retries create duplicate tickets or payments.
Two model replicas use different prompt versions.
An embedding migration leaves the index partially updated.
A user deletes data, but copies remain in caches and vector indexes.
Events arrive out of order.
The evaluation pipeline joins responses with incorrect labels.
A regional outage causes unexpectedly stale state.
Senior-level principle

Never say simply:

“We use Kafka/Kubernetes/Redis/vector database.”

Explain:

Why the component is needed
What invariant it protects
What happens when it fails
What consistency level it provides
How its operation is observed
How recovery works
What alternatives were rejected
Day 11 — Platform, Kubernetes, Observability, and Security
Objective

Connect model behaviour to production operations.

Kubernetes

Revise:

Pods
Deployments
Services
Ingress
ConfigMaps and secrets
Readiness and liveness probes
Requests and limits
Horizontal autoscaling
GPU scheduling
Rolling deployments
Pod disruption
Graceful shutdown
Important distinction
Readiness

Can this instance accept traffic now?

Liveness

Is the process irrecoverably unhealthy and in need of restarting?

Incorrect probes can produce cascading failures.

Observability

Use the three basic signals:

Metrics
Logs
Traces

For LLM systems, capture:

Request ID
Trace ID
Model and version
Prompt/template version
Retrieval/index version
Tool calls
Token counts
Latencies by stage
Retry counts
Cache hits
Evaluation result
Safety result
Cost
Final outcome

Do not log secrets or sensitive user data indiscriminately.

Security

Revise:

Prompt injection
Indirect prompt injection
Tool-output injection
Data exfiltration
Excessive agency
Cross-tenant data exposure
Secret leakage
Unsafe logging
Dependency and supply-chain risk
Model endpoint abuse
Denial-of-wallet attacks
Security invariant
Model output is a proposal, not authorization.


The application must enforce:

Identity
Authorization
Schema validation
Policy checks
Resource limits
Approval requirements
Auditability
Practical exercise

Perform a threat model for your Day 7 support agent.

For every boundary, record:

Asset
Threat
Attack path
Impact
Preventive control
Detective control
Recovery mechanism

Day 12 — Full System Design and Mock Interview
Objective

Integrate everything into one coherent architecture.

Spend this day on one complete design rather than revising isolated facts.

Capstone Design

Design:

A multi-tenant enterprise knowledge and action platform supporting RAG, conversational memory, tool use, human approval, streaming responses and continuous evaluation.

Functional requirements
Ingest enterprise documents
Respect access permissions
Support hybrid retrieval
Rerank results
Generate cited answers
Execute approved tools
Maintain conversation state
Escalate to humans
Collect feedback
Evaluate changes before deployment
Non-functional requirements
Multi-tenant isolation
High availability
Low response latency
Explainability and auditability
Bounded cost
Data freshness
Security
Model and prompt versioning
Graceful degradation
Regional recovery
Architecture layers
1. Ingestion
Connectors
Parsing
Validation
Deduplication
Chunking
Metadata
Access-control propagation
Embedding generation
Index updates
2. Online request path
API gateway
Authentication
Authorization
Rate limiting
Orchestrator
Query rewriting
Retrieval
Reranking
Context construction
Model gateway
Tool execution
Streaming response
3. State
Conversation state
Workflow state
Long-term memory
Document store
Vector index
Keyword index
Cache
4. Evaluation
Trace collection
Offline datasets
Regression suite
Human review
LLM judge
Online experimentation
Quality dashboards
5. Operations
Deployment
Autoscaling
Observability
Incident response
Rollback
Cost controls
Capacity planning
Failure analysis

Walk through at least ten failures:

Embedding service outage
Vector index latency spike
Reranker failure
Model-server overload
Tool timeout
Duplicate tool execution
Stale permissions
Prompt-version regression
Partial deployment
Observability pipeline failure

For each one, explain:

Detection
User-visible effect
Containment
Fallback
Recovery
Prevention
If You Have Only 10 Days

Combine the following:

Days 1 and 2: Math + core ML
Days 10 and 11: Distributed systems + Kubernetes/observability/security

Keep Days 4–9 and Day 12 separate because they represent the most important Senior AI/LLM engineering competencies.

The 10-day sequence becomes:

Math + core ML
Deep-learning mechanics
Transformer internals
LLM training systems
Retrieval and RAG
Agents
Evaluation
Serving
Distributed production platform
Full system design and mock interview
Time Allocation by Priority

For a revision sprint, I would allocate approximately:

Transformer and LLM internals       12%
Training and distributed AI        12%
Retrieval and RAG                   12%
Evaluation                          12%
Serving and inference               12%
Agents                              10%
Distributed systems                 10%
Production/observability/security   10%
Math + classical ML                 10%


This is intentionally different from the original learning roadmap. You now need to emphasize integration, diagnosis and design, not foundational study time.

Your Final Revision Pack

By the end of the sprint, produce the following artifacts.

1. Twelve two-page summaries

One summary for each revision day.

2. Eight architecture diagrams

At minimum:

Decoder-only transformer
Distributed training system
RAG pipeline
Agent state machine
Evaluation platform
LLM inference service
Enterprise AI platform
Observability architecture
3. One invariant sheet

Examples:

Retrieval quality places an upper bound on evidence available to generation.

Model output is not authorization.

Retries are safe only when operations are idempotent or deduplicated.

Offline quality is meaningful only when the evaluation distribution represents production.

High GPU utilization does not necessarily imply high useful throughput.

Every distributed state transition requires a consistency and recovery model.

Every agent loop requires a bounded termination condition.

Every production model decision must be versioned and observable.

4. One trade-off sheet

Cover:

Quality versus latency
Latency versus throughput
Freshness versus cost
Consistency versus availability
Context length versus concurrency
Agent autonomy versus safety
Dense versus sparse retrieval
Offline versus online evaluation
Fine-tuning versus prompting/RAG
Managed versus self-hosted models
5. One failure-mode catalogue

Organize failures by:

Data
Training
Retrieval
Generation
Agent orchestration
Tool execution
Serving
Distributed infrastructure
Security
Evaluation
6. One complete system-design document

Use the Day 12 capstone.

Daily Scoring System

At the end of every day, score yourself from 0–3.

Score	Meaning0	Cannot explain the concept
1	Recognize it but need notes
2	Can explain independently
3	Can derive, compare alternatives and discuss production failures

Track five dimensions:

Conceptual understanding:  __ / 3
Mathematical understanding: __ / 3
Implementation understanding: __ / 3
Production reasoning:       __ / 3
Verbal explanation:         __ / 3


A topic is Senior-level only when you can consistently score 2 or 3 in production reasoning and verbal explanation, not merely conceptual recall.

What Not to Do During These 12 Days

Avoid:

Rereading entire books
Rewatching complete lecture series
Making beautiful but passive notes
Learning additional frameworks
Collecting more papers
Building a large new application from scratch
Memorizing library APIs
Spending several hours on one mathematical proof
Revising topics you already know while avoiding weak areas

Use this rule:

20% closed-book reconstruction
30% targeted repair
25% system design/application
15% verbal explanation
10% permanent summary

Final Recommendation

Your revision should follow this mental progression:

Can I define it?
      ↓
Can I derive or reconstruct it?
      ↓
Can I implement its core mechanism?
      ↓
Can I compare alternatives?
      ↓
Can I identify failure modes?
      ↓
Can I operate it in production?
      ↓
Can I defend the design in a Senior Engineer interview?


The last three levels—trade-offs, failure analysis and production operation—are what will distinguish you from someone who has merely completed the courses.

Given your theory-deep and invariant-driven style, make the invariant sheet, failure catalogue and end-to-end architecture the centrepieces of this revision sprint.
