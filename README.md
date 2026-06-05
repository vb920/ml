# ML
Absolutely. Here’s a **single integrated “top 1% AI agent developer” plan** combining:

* **books**
* **Stanford courses**
* **papers**
* **ChapterPal curricula**
* **engineering blogs**
* **projects**
* **what to skip/delay**

The goal is not to “know AI.” The goal is to become someone who can **design, build, debug, evaluate, and scale autonomous AI systems from first principles**.

***

# The North Star

A top 1% AI agent dev should be strong in **five layers**:

1. **Mathematical + ML foundations**
2. **Deep learning + transformers**
3. **LLMs, alignment, and post-training**
4. **Agents, retrieval, tools, memory, planning**
5. **Production systems: inference, evals, monitoring, MLOps**

The plan below is ordered exactly that way.

***

# Phase 0 — Prerequisites: Math, Python, Systems Thinking

## Goal

Become impossible to fool on basics.

## Books

Read these selectively, not cover-to-cover unless needed:

1. **Mathematics for Machine Learning** — Deisenroth, Faisal, Ong
2. **Introduction to Linear Algebra** — Gilbert Strang
3. **Probability and Statistics** — Morris DeGroot or Blitzstein notes/videos
4. **Convex Optimization** — Boyd & Vandenberghe, selected chapters
5. **Designing Data-Intensive Applications** — Martin Kleppmann
6. **Computer Systems: A Programmer’s Perspective** — Bryant & O’Hallaron, selected chapters

## ChapterPal curricula

Use:

* **Mathematics for Machine Learning**
* **Understanding Uncertainty**
* **A Byte of Python**, only if you want to patch Python gaps
* **Good Data Analysis**
* **Data Traps**

ChapterPal lists these as part of its curricula/bookstore, including *Mathematics for Machine Learning*, *Understanding Uncertainty*, *Good Data Analysis*, and *Data Traps*. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Output project

Build a tiny library in Python/PyTorch implementing:

* linear regression
* logistic regression
* softmax classifier
* MLP
* backprop by hand
* SGD, momentum, Adam

Even if you prefer Java generally, for this path **Python + PyTorch is mandatory** because most research and agent infrastructure lives there.

***

# Phase 1 — Classical ML + Statistical Learning

## Main course

### Stanford CS229 — Machine Learning

CS229 gives a broad introduction to supervised learning, unsupervised learning, kernels, learning theory, neural networks, reinforcement learning, and practical ML advice. [\[cs229.stanford.edu\]](https://cs229.stanford.edu/index.html-summer25)

Use the 2018 Andrew Ng public playlist if you want videos; it covers linear regression, logistic regression, SVMs, kernels, neural networks, debugging ML, EM, PCA/ICA, and RL. [\[youtube.com\]](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU)

## Books

1. **Pattern Recognition and Machine Learning** — Bishop
2. **Machine Learning: A Probabilistic Perspective** — Kevin Murphy
3. **The Hundred-Page Machine Learning Book** — Andriy Burkov
4. **Hands-On Machine Learning** — Aurélien Géron, for practical grounding

ChapterPal includes *The Hundred-Page Machine Learning Book* and *Machine Learning Engineering* in its curricula/bookstore. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Papers

Read milestone-level papers only here:

* Perceptron
* Backpropagation
* Random Forests
* SVM
* AdaBoost
* Adam
* Batch Normalization
* Dropout

## ChapterPal curricula

Use:

* **Foundational milestone papers in AI**
* **The Hundred-Page Machine Learning Book**
* **Rules of Machine Learning**
* **Machine Learning Engineering**

The ChapterPal page includes curricula for “Foundational milestone papers in AI,” *The Hundred-Page Machine Learning Book*, *Machine Learning Engineering*, and “Rules of Machine Learning.” [\[chapterpal.com\]](https://www.chapterpal.com/)

## Output project

Build a full ML pipeline:

* dataset loading
* feature engineering
* train/validation/test split
* baseline models
* metric selection
* error analysis
* calibration
* model card

***

# Phase 2 — Deep Learning Foundations

## Main courses

### Stanford CS231n — Deep Learning for Computer Vision

Even if your target is agents, CS231n is excellent for learning neural-net mechanics, backprop, optimization, CNNs, transformers, self-supervised learning, diffusion, CLIP, and practical training/debugging. The official CS231n course emphasizes implementing and training neural networks, deep learning architectures, and practical tricks for training/fine-tuning deep nets. [\[cs231n.stanford.edu\]](https://cs231n.stanford.edu/)

The CS231n notes include modules on neural networks, optimization, backpropagation, CNNs, regularization, batch normalization, dropout, RNNs, transformers, diffusion models, CLIP, and DINO. [\[cs231n.github.io\]](https://cs231n.github.io/)

## Books

1. **Deep Learning** — Goodfellow, Bengio, Courville
2. **Dive into Deep Learning** — Zhang et al.
3. **Understanding Deep Learning** — Simon Prince
4. **Neural Networks and Deep Learning** — Michael Nielsen

ChapterPal includes *Dive into Deep Learning with PyTorch* and *Deep Learning Tuning Playbook*. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Papers

Read:

* AlexNet
* VGG
* ResNet
* BatchNorm
* Dropout
* Adam
* U-Net
* ViT
* CLIP
* SimCLR
* DINO
* Diffusion models overview

## ChapterPal curricula

Use:

* **Must-read papers on deep learning**
* **Must-read papers on convolutional neural networks**
* **Must-read papers on attention mechanisms**
* **Deep Learning Tuning Playbook**

ChapterPal lists “Must-read papers on deep learning,” “Must-read papers on convolutional neural networks,” “Must-read papers on attention mechanisms,” and *Deep Learning Tuning Playbook*. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Output project

Build from scratch:

* MLP
* CNN
* ResNet-style model
* small image classifier
* training loop with checkpointing
* tensorboard/wandb-style logs
* LR scheduling
* error analysis

***

# Phase 3 — NLP + Transformers + Language Models

This is where your agent brain starts forming.

## Main courses

### Stanford CS224N — NLP with Deep Learning

CS224N introduces neural networks for NLP, including word vectors, RNNs, seq2seq, attention, transformers, pretraining, prompting, RLHF, question answering, code generation, multimodal deep learning, and model interpretability/editing. [\[web.stanford.edu\]](https://web.stanford.edu/class/cs224n/)

The public CS224N material includes free lecture videos from previous offerings, and the course slides/assignments are updated online each year. [\[web.stanford.edu\]](https://web.stanford.edu/class/cs224n/)

### Stanford CS336 — Language Modeling from Scratch

This is one of the most important courses for your goal. CS336 walks through building language models from scratch: data collection/cleaning, transformer construction, training, evaluation, deployment, systems optimization, GPUs, memory hierarchy, scaling laws, inference, data, post-training, and alignment. [\[cs336.stanford.edu\]](https://cs336.stanford.edu/)

Stanford Online describes CS336 as a course where students walk through the full process of developing their own language model, including data collection/cleansing, transformer construction, training, and evaluation before deployment. [\[online.stanford.edu\]](https://online.stanford.edu/courses/cs336-language-modeling-scratch)

The CS336 GitHub org includes public lecture materials and assignments such as basics, systems, scaling, data, and alignment. [\[github.com\]](https://github.com/stanford-cs336/)

## Books

1. **Speech and Language Processing** — Jurafsky & Martin
2. **The Hundred-Page Language Models Book** — Andriy Burkov
3. **Build a Large Language Model From Scratch** — Sebastian Raschka
4. **Natural Language Processing with Transformers** — Tunstall, von Werra, Wolf

ChapterPal includes *The Hundred-Page Language Models Book*. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Papers: mandatory core

Read in this order:

1. **A Neural Probabilistic Language Model**
2. **word2vec**
3. **Sequence to Sequence Learning**
4. **Neural Machine Translation by Jointly Learning to Align and Translate**
5. **Attention Is All You Need**
6. **BERT**
7. **GPT-2**
8. **GPT-3**
9. **T5**
10. **Scaling Laws for Neural Language Models**
11. **Chinchilla**
12. **LLaMA**
13. **Mistral / Mixtral**
14. **FlashAttention**
15. **PagedAttention**
16. **Speculative Decoding**

## ChapterPal curricula

Use:

* **Must-read papers on transformer architectures**
* **Must-read papers on autoregressive generation**
* **Must-read papers on attention mechanisms**
* **Must-read papers on mixture-of-experts models**

ChapterPal lists curricula for transformer architectures, autoregressive generation, attention mechanisms, and mixture-of-experts models. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Output project

Build a **tiny GPT from scratch**:

* BPE tokenizer
* causal self-attention
* transformer block
* training loop
* sampling: greedy, top-k, top-p, temperature
* KV cache
* eval perplexity
* simple instruction tuning

This is non-negotiable. If you can’t build a tiny LM, agent frameworks will remain magic.

***

# Phase 4 — LLM Alignment, Fine-Tuning, and Model Behavior

## Main course

CS336 again, especially post-training/alignment lectures. Its Spring 2026 playlist includes lectures on evaluation, data, mid/post-training, RLVR, post-training, alignment, and multimodality. [\[youtube.com\]](https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV)

## Books/resources

1. **The Alignment Problem** — Brian Christian
2. **Human Compatible** — Stuart Russell
3. OpenAI, Anthropic, DeepMind alignment blogs
4. Hugging Face alignment handbook/resources

## Papers

Read:

1. **InstructGPT**
2. **RLHF**
3. **Constitutional AI**
4. **LIMA**
5. **LoRA**
6. **QLoRA**
7. **DPO**
8. **KTO**
9. **ORPO**
10. **Self-Instruct**
11. **RLAIF**
12. **LLM-as-a-Judge**
13. **Process Supervision**
14. **Constitutional Classifiers / safety evals**

## ChapterPal curricula

Use:

* **Prep reading for LLM finetuning and alignment techniques interview**
* **Prep reading for AI problem framing and metrics interview**

ChapterPal describes its LLM finetuning/alignment curriculum as covering instruction tuning, LIMA, LoRA, QLoRA, RLHF, constitutional AI, DPO, KTO, ORPO, LLM-as-judge, process verification, and adversarial robustness. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Output project

Fine-tune a small model:

* SFT on instruction data
* LoRA/QLoRA
* preference dataset
* DPO training
* eval set
* hallucination test
* refusal/safety behavior tests
* regression evals

***

# Phase 5 — AI Agents: Planning, Tools, Memory, Reflection

This is your main specialization.

## Main reading

Use ChapterPal’s:

* **Must-read papers on autonomous agents**

ChapterPal describes this curriculum as covering autonomous intelligence from scratch across symbolic logic, reinforcement learning, and LLM reasoning, aimed at engineering adaptive agents capable of planning, learning, and complex interaction. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Papers: agent core

Read in this order:

1. **ReAct**
2. **Toolformer**
3. **MRKL**
4. **Reflexion**
5. **Tree of Thoughts**
6. **Graph of Thoughts**
7. **Self-Refine**
8. **Voyager**
9. **Generative Agents**
10. **AutoGen**
11. **SWE-agent**
12. **WebGPT**
13. **SayCan**
14. **Inner Monologue**
15. **DSPy**
16. **MemGPT**
17. **CAMEL**
18. **Plan-and-Solve Prompting**
19. **LLM Compiler**
20. **ToolLLM**

## Concepts to master

* agent loop: plan → act → observe → reflect
* tool calling
* function schemas
* planner/executor split
* memory: working, episodic, semantic
* retrieval as memory
* task decomposition
* hallucination control
* environment feedback
* multi-agent coordination
* evaluation harnesses
* trace debugging

## Blogs

Read:

* Lilian Weng — agents, RL, transformers, diffusion
* Chip Huyen — ML systems, agents, evaluation
* Anthropic research blog
* OpenAI research/blog
* DeepMind blog
* LangChain blog, but read critically
* LlamaIndex blog, especially RAG and evals
* Simon Willison, for practical LLM engineering
* Sebastian Raschka, for LLM internals
* Eugene Yan, for applied ML systems

## Output project

Build a **research agent** from scratch:

* planner
* tool registry
* browser/search tool
* Python execution tool
* retrieval memory
* structured scratchpad
* citation checking
* reflection step
* max-step guardrails
* trace viewer
* eval set with 50 tasks

Do not start with LangChain. First build a minimal framework yourself. Then use frameworks once you know what they hide.

***

# Phase 6 — Retrieval, RAG, Embeddings, Search, Ranking

Most useful agents are actually:

> LLM + tools + retrieval + ranking + evals

## Main courses/curricula

Use ChapterPal:

* **Prep reading for search and retrieval systems interview**
* **Prep reading for embeddings and vector systems interview**
* **Prep reading for ranking systems interview**

ChapterPal’s search/retrieval curriculum covers classical IR, term weighting, probabilistic models, inverted indexing, clickthrough optimization, neural ranking, BERT, dense passage retrieval, late interaction, contrastive learning, RAG, approximate nearest neighbor search, and zero-shot evaluation. [\[chapterpal.com\]](https://www.chapterpal.com/)

Its embeddings/vector systems curriculum covers word representations, transformer-based embeddings, sentence embeddings, contrastive learning, dense retrieval, late interaction, visual-language alignment, approximate nearest neighbor search, quantization, and graph-based indexing. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Books

1. **Introduction to Information Retrieval** — Manning, Raghavan, Schütze
2. **Search Engines: Information Retrieval in Practice** — Croft, Metzler, Strohman
3. **Designing Data-Intensive Applications** — revisit storage/indexing chapters

## Papers

Read:

1. **TF-IDF / Vector Space Model**
2. **BM25**
3. **PageRank**
4. **Learning to Rank**
5. **RankNet**
6. **LambdaRank**
7. **LambdaMART**
8. **DSSM**
9. **DPR**
10. **REALM**
11. **RAG**
12. **ColBERT**
13. **Contriever**
14. **Sentence-BERT**
15. **ANCE**
16. **HNSW**
17. **FAISS**
18. **ScaNN**
19. **HyDE**
20. **Self-RAG**
21. **RAGAS / retrieval eval papers**

## Output project

Build a serious RAG system:

* ingestion
* chunking
* metadata extraction
* BM25
* vector search
* hybrid retrieval
* reranking
* query rewriting
* citation grounding
* answer generation
* hallucination detection
* retrieval precision/recall eval
* latency + cost tracking

***

# Phase 7 — AI Systems, Serving, Inference, MLOps

This is where you separate from prompt engineers.

## Main courses/curricula

Use ChapterPal:

* **Prep reading for model serving and inference interview**
* **Prep reading for AI platform and MLOps interview**
* **Prep reading for model training infrastructure interview**
* **Prep reading for ML monitoring and observability interview**
* **Prep reading for streaming and event-driven ML system design interview**
* **Prep reading for data pipelines & feature engineering interview**

ChapterPal’s model serving/inference curriculum includes Transformer design, TVM, Triton, FlashAttention, PagedAttention, disaggregated prefill-decode, speculative decoding, quantization methods such as LLM.int8, SmoothQuant, GPTQ, AWQ, and adapter serving such as S-LoRA. [\[chapterpal.com\]](https://www.chapterpal.com/)

Its AI platform/MLOps curriculum covers technical debt, data validation, experiment tracking, model management, high-performance training and serving, distributed parallelization, memory-efficient optimization, and LLM serving. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Courses

### Stanford CS336 systems lectures

CS336 explicitly expects deep learning and systems optimization familiarity, including PyTorch, GPUs, distributed/multi-machine execution, memory hierarchy, scaling laws, inference, data, and evaluation. [\[cs336.stanford.edu\]](https://cs336.stanford.edu/)

## Books

1. **Designing Data-Intensive Applications** — Kleppmann
2. **Machine Learning Engineering** — Andriy Burkov
3. **Designing Machine Learning Systems** — Chip Huyen
4. **Reliable Machine Learning** — Cathy Chen et al.
5. **System Design Interview Vol. 1 & 2** — Alex Xu
6. **Database Internals** — Alex Petrov

## Papers

Read:

1. **Hidden Technical Debt in ML Systems**
2. **TFX**
3. **Data Validation for ML**
4. **ML Test Score**
5. **Model Cards**
6. **Datasheets for Datasets**
7. **Triton**
8. **TVM**
9. **FlashAttention**
10. **PagedAttention / vLLM**
11. **Speculative Decoding**
12. **SmoothQuant**
13. **GPTQ**
14. **AWQ**
15. **S-LoRA**
16. **DeepSpeed / ZeRO**
17. **Megatron-LM**
18. **FSDP**
19. **Ring Attention / long-context systems**
20. **LLM serving papers from 2024–2026**

## Output project

Build an **agent serving platform**:

* API gateway
* model router
* prompt versioning
* tool execution sandbox
* retrieval service
* cache
* tracing
* token/cost accounting
* latency metrics
* eval regression suite
* user feedback loop
* monitoring dashboard
* fallback model strategy

***

# Phase 8 — Evaluation, Metrics, Experimentation

This is the most underrated phase.

## Main curricula

Use ChapterPal:

* **Prep reading for AI problem framing and metrics interview**
* **Prep reading for A/B testing & experimentation interview**
* **Prep reading for ML monitoring and observability interview**

ChapterPal’s AI problem framing and metrics curriculum covers precision-recall/ROC, proper scoring rules, statistical comparison of algorithms, cost-sensitive learning, calibration, uncertainty quantification, shortcut learning, OOD detection, adversarial robustness, behavioral testing, SHAP, fairness, bias, and ML technical debt. [\[chapterpal.com\]](https://www.chapterpal.com/)

Its A/B testing curriculum covers experimentation infrastructure, statistical principles, variance reduction, bias mitigation, long-term impact measurement, and diagnosing experiment failures. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Books

1. **Trustworthy Online Controlled Experiments** — Kohavi, Tang, Xu
2. **Evaluating Machine Learning Models** — Alice Zheng
3. **Interpretable Machine Learning** — Christoph Molnar
4. **The Art of Statistics** — David Spiegelhalter

## Papers/topics

Read:

* calibration of neural networks
* conformal prediction
* selective prediction
* OOD detection
* adversarial examples
* shortcut learning
* behavioral testing
* LLM-as-judge
* pairwise preference evals
* human eval design
* long-term A/B testing effects

## Output project

Build an **agent eval harness**:

* golden test set
* adversarial tasks
* tool-use correctness
* retrieval correctness
* answer faithfulness
* latency
* cost
* task success
* hallucination rate
* judge-model agreement
* human review UI
* regression dashboard

***

# Phase 9 — Multimodal Agents

Do this after you are strong in text agents.

## Courses

### CS231n again

CS231n 2026/2025 material includes vision, transformers, self-supervised learning, diffusion, CLIP/DINO, vision-language models, 3D vision, and robot learning. [\[cs231n.stanford.edu\]](https://cs231n.stanford.edu/), [\[youtube.com\]](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16)

### CS25 — Transformers United

CS25 is a Stanford seminar on transformer research and applications across LLMs, art, biology, robotics, and multimodal directions; it features researchers such as Geoffrey Hinton, Ashish Vaswani, and Andrej Karpathy. [\[web.stanford.edu\]](https://web.stanford.edu/class/cs25/)

CS25’s current iteration says anyone can audit in-person or join Zoom livestreams, and the course focuses on latest breakthroughs in AI and transformer research. [\[web.stanford.edu\]](https://web.stanford.edu/class/cs25/)

## ChapterPal curricula

Use:

* **Must-read papers in multimodal AI**
* **Must-read papers on modern computer vision**
* **Must-read papers on neural image generation**
* **Must-read papers on diffusion models**
* **Must-read papers in 3D generation and neural radiance fields**

ChapterPal lists curricula on multimodal AI, modern computer vision, neural image generation, diffusion models, and 3D generation/NeRFs. [\[chapterpal.com\]](https://www.chapterpal.com/)

## Papers

Read:

* CLIP
* ALIGN
* Flamingo
* BLIP/BLIP-2
* LLaVA
* GPT-4V-style eval papers
* SAM
* DINO
* ViT
* Diffusion models
* Stable Diffusion
* NeRF
* RT-1 / RT-2
* SayCan
* PaLM-E
* VLA / robotics agents

## Output project

Build a multimodal agent:

* image input
* OCR
* visual question answering
* document understanding
* chart/table reasoning
* tool execution
* retrieval over images/documents
* multimodal evals

***

# The Complete 18-Month Roadmap

## Months 1–2: Foundations

Do:

* CS229 selected lectures
* Mathematics for ML
* Bishop selected chapters
* ChapterPal: Mathematics for ML, Understanding Uncertainty

Build:

* ML algorithms from scratch
* basic training/eval pipeline

***

## Months 3–4: Deep Learning

Do:

* CS231n lectures/assignments
* Goodfellow selected chapters
* Dive into Deep Learning
* ChapterPal: Deep Learning papers + Tuning Playbook

Build:

* MLP/CNN/ResNet training framework
* experiment tracking

***

## Months 5–7: NLP + Transformers

Do:

* CS224N
* CS336
* Jurafsky & Martin selected chapters
* Raschka LLM book
* ChapterPal: Transformers, Attention, Autoregressive Generation

Build:

* tokenizer
* tiny GPT
* KV cache
* sampling
* pretraining mini-run
* instruction-tuning mini-run

***

## Months 8–9: Alignment + Fine-tuning

Do:

* CS336 post-training lectures
* LLM finetuning/alignment papers
* LoRA, QLoRA, DPO, RLHF

Build:

* SFT pipeline
* LoRA fine-tuning
* DPO preference tuning
* safety/eval harness

***

## Months 10–12: Agents + RAG

Do:

* ChapterPal autonomous agents
* ReAct, Toolformer, Reflexion, ToT, Voyager, SWE-agent
* Search/retrieval/vector curricula

Build:

* tool-using research agent
* RAG system from scratch
* memory system
* planner/executor

***

## Months 13–15: Production Systems

Do:

* CS336 systems/inference lectures
* MLOps, model serving, monitoring curricula
* DDIA
* Chip Huyen’s ML systems material

Build:

* production agent platform
* tracing
* prompt/version control
* cost/latency monitoring
* regression evals
* model router

***

## Months 16–18: Capstone + Public Proof

Build one flagship project:

> **A production-grade autonomous research/software agent platform**

It should include:

* multi-step planning
* tool calling
* retrieval
* memory
* code execution
* citations
* task evals
* trace viewer
* monitoring
* model routing
* cost accounting
* fallback handling
* deployment

Then write:

* technical blog post
* architecture diagram
* failure analysis
* eval report
* demo video

This is what makes you visibly top-tier.

***

# The Minimal “If I Had Only 12 Resources” List

If you want maximum ROI, do these:

1. **CS229** — ML foundations
2. **CS231n** — deep learning mechanics
3. **CS224N** — NLP/transformers
4. **CS336** — language modeling from scratch
5. **Designing Data-Intensive Applications**
6. **Designing Machine Learning Systems**
7. **Deep Learning** — Goodfellow
8. **Mathematics for Machine Learning**
9. **Build a Large Language Model from Scratch**
10. **ChapterPal: Autonomous Agents**
11. **ChapterPal: Search/Retrieval + Embeddings/Vector Systems**
12. **ChapterPal: Model Serving + MLOps + Monitoring**

***

# What to Delay

Don’t deeply study these early unless your job/project requires them:

* GANs
* VAEs
* diffusion language models
* 3D generation
* NeRFs
* pruning
* graph neural networks
* ad ranking
* recommender systems
* neural video synthesis

They are valuable, but they are not the shortest path to elite **AI agent engineering**.
