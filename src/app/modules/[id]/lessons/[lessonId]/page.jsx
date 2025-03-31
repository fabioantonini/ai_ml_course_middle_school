import React from 'react';
import Link from 'next/link';

export default function LessonLayout({ params }) {
  const moduleId = params.id;
  const lessonId = params.lessonId;
  
  // Get lesson content based on module and lesson IDs
  const lessonContent = getLessonContent(moduleId, lessonId);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8 flex justify-between items-center">
        <Link href={`/modules/${moduleId}`}>
          <a className="text-blue-500 hover:text-blue-700">← Back to Module</a>
        </Link>
        
        <div className="flex space-x-4">
          {lessonId > 1 && (
            <Link href={`/modules/${moduleId}/lessons/${parseInt(lessonId) - 1}`}>
              <a className="text-blue-500 hover:text-blue-700">← Previous Lesson</a>
            </Link>
          )}
          
          {parseInt(lessonId) < getLessonCount(moduleId) && (
            <Link href={`/modules/${moduleId}/lessons/${parseInt(lessonId) + 1}`}>
              <a className="text-blue-500 hover:text-blue-700">Next Lesson →</a>
            </Link>
          )}
        </div>
      </nav>
      
      <header className="mb-8">
        <div className="text-sm text-gray-500 mb-1">Module {moduleId}, Lesson {lessonId}</div>
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{lessonContent.title}</h1>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Learning Objectives</h2>
              <ul className="list-disc pl-6 space-y-1">
                {lessonContent.learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Vocabulary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(lessonContent.vocabulary).map(([term, definition], index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded">
                    <h3 className="font-bold">{term}</h3>
                    <p>{definition}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {lessonContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div className="prose max-w-none">
                  {section.content}
                </div>
                
                {section.image && (
                  <div className="mt-4 bg-gray-100 p-4 rounded-lg flex justify-center">
                    <img 
                      src={section.image.src} 
                      alt={section.image.alt}
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                )}
              </div>
            ))}
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Activity</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{lessonContent.activity.title}</h3>
                <div className="prose max-w-none">
                  {lessonContent.activity.description}
                </div>
                
                {lessonContent.activity.interactive && (
                  <div className="mt-4">
                    <Link href={lessonContent.activity.link}>
                      <a className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                        Try Interactive Activity
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Check Your Understanding</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="mb-4">Test your knowledge with these questions:</p>
                <ul className="list-disc pl-6 space-y-3">
                  {lessonContent.checkUnderstanding.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Link href={`/modules/${moduleId}/assessment`}>
                    <a className="inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
                      Take Module Quiz
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Further Exploration</h2>
              <p className="mb-4">Want to learn more? Check out these resources:</p>
              <ul className="list-disc pl-6 space-y-2">
                {lessonContent.furtherResources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {resource.title}
                    </a>
                    {resource.description && (
                      <span className="text-gray-600"> - {resource.description}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
        
        <aside className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-8">
            <h2 className="text-xl font-bold mb-4">Lesson Navigation</h2>
            <ul className="space-y-1">
              <li>
                <a href="#learning-objectives" className="block p-2 hover:bg-blue-100 rounded transition-colors">
                  Learning Objectives
                </a>
              </li>
              <li>
                <a href="#key-vocabulary" className="block p-2 hover:bg-blue-100 rounded transition-colors">
                  Key Vocabulary
                </a>
              </li>
              {lessonContent.sections.map((section, index) => (
                <li key={index}>
                  <a href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`} className="block p-2 hover:bg-blue-100 rounded transition-colors">
                    {section.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#activity" className="block p-2 hover:bg-blue-100 rounded transition-colors">
                  Activity
                </a>
              </li>
              <li>
                <a href="#check-your-understanding" className="block p-2 hover:bg-blue-100 rounded transition-colors">
                  Check Your Understanding
                </a>
              </li>
              <li>
                <a href="#further-exploration" className="block p-2 hover:bg-blue-100 rounded transition-colors">
                  Further Exploration
                </a>
              </li>
            </ul>
            
            <div className="mt-8 pt-4 border-t border-gray-200">
              <h2 className="text-xl font-bold mb-4">Module Progress</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(parseInt(lessonId) / getLessonCount(moduleId)) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Lesson {lessonId} of {getLessonCount(moduleId)}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function getLessonCount(moduleId) {
  const counts = {
    "1": 2,
    "2": 2,
    "3": 2,
    "4": 2,
    "5": 2,
    "6": 2
  };
  
  return counts[moduleId] || 2;
}

function getLessonContent(moduleId, lessonId) {
  // This would typically come from a database or API
  // For now, we'll just return some sample content
  
  // Sample content for Module 4 (LLMs and Attention), Lesson 1
  if (moduleId === "4" && lessonId === "1") {
    return {
      title: "Introduction to Large Language Models (LLMs)",
      learningObjectives: [
        "Define what Large Language Models are and how they differ from other AI systems",
        "Understand the basic concept of how LLMs process and generate text",
        "Identify common applications of LLMs in everyday technology",
        "Recognize the capabilities and limitations of language models",
        "Discuss ethical considerations related to LLMs"
      ],
      vocabulary: {
        "Large Language Model (LLM)": "AI systems trained on vast amounts of text data that can understand and generate human language",
        "Natural Language Processing (NLP)": "The field of AI focused on interactions between computers and human language",
        "Text Generation": "Creating new text based on patterns learned from training data",
        "Prompt": "The input text given to an LLM to generate a response",
        "Token": "Words or parts of words that LLMs process as individual units"
      },
      sections: [
        {
          title: "What are Large Language Models?",
          content: "Large Language Models (LLMs) are AI systems trained on massive amounts of text from books, websites, articles, and other sources. They're designed to understand and generate human language, and are capable of tasks like answering questions, writing text, translating languages, and more. Examples include models like GPT (Generative Pre-trained Transformer), BERT, and others.",
          image: {
            src: "/images/module4/llm_process.png",
            alt: "Diagram showing how Large Language Models process text"
          }
        },
        {
          title: "How Do LLMs Work?",
          content: "LLMs work by analyzing patterns in text data during training. When given a prompt, they predict what words should come next based on the patterns they've learned. The process involves tokenization (breaking text into smaller units), analyzing relationships between these tokens, and generating new text one token at a time. Each new word is based on all the previous words and the patterns learned during training.",
        },
        {
          title: "Applications of LLMs",
          content: "LLMs power many technologies we use every day, including virtual assistants like Siri and Alexa, chatbots for customer service, writing assistants for grammar checking and content creation, translation services, search engines that understand complex questions, and educational tools for tutoring and explanations.",
        },
        {
          title: "Capabilities and Limitations",
          content: "LLMs can answer questions based on information they've learned, generate creative content like stories or poems, summarize long texts, translate between languages, and help with writing and editing. However, they don't truly 'understand' text the way humans do, can generate incorrect information (sometimes called 'hallucinations'), don't have real-time knowledge unless connected to the internet, don't have personal experiences or emotions, and can reflect biases present in their training data.",
        }
      ],
      activity: {
        title: "LLM Prediction Game",
        description: "In this activity, you'll predict how an LLM might complete different sentences, then compare your predictions with others. This helps demonstrate how LLMs make predictions based on patterns in text.",
        interactive: true,
        link: "/activities/llm-prediction"
      },
      checkUnderstanding: [
        "What are Large Language Models trained on?",
        "How do LLMs generate text?",
        "Name three applications of LLMs in everyday technology.",
        "What are two limitations of current LLMs?",
        "Why might different LLMs give different answers to the same question?"
      ],
      furtherResources: [
        {
          title: "How Do Large Language Models Work?",
          link: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
          description: "YouTube video with simple explanations"
        },
        {
          title: "AI for Kids: Understanding Language Models",
          link: "https://www.allaboutai.com/ai-for-kids",
          description: "Kid-friendly guide to language models"
        },
        {
          title: "Ethics of AI: Guide for Young Learners",
          link: "https://www.unicef.org/globalinsight/stories/ai-children",
          description: "UNICEF resource on AI ethics for children"
        }
      ]
    };
  }
  
  // Sample content for Module 3 (Supervised/Unsupervised), Lesson 1
  if (moduleId === "3" && lessonId === "1") {
    return {
      title: "Understanding Supervised Learning",
      learningObjectives: [
        "Define supervised learning and explain its basic principles",
        "Identify real-world applications of supervised learning",
        "Understand the importance of labeled data",
        "Distinguish between classification and regression problems",
        "Create a simple supervised learning example"
      ],
      vocabulary: {
        "Supervised Learning": "A type of machine learning where the algorithm learns from labeled training data",
        "Labeled Data": "Examples that include both input features and the correct output/answer",
        "Classification": "Predicting which category an example belongs to",
        "Regression": "Predicting a continuous value (like a number)",
        "Training Set": "The data used to teach the algorithm",
        "Testing Set": "New data used to evaluate how well the algorithm learned"
      },
      sections: [
        {
          title: "What is Supervised Learning?",
          content: "Supervised learning is a type of machine learning where the computer learns from labeled examples (input → correct output). A 'teacher' (human) provides the correct answers during training, and the goal is to make accurate predictions on new, unseen examples. It's like learning to identify different types of fruit with a teacher showing you examples and telling you what each one is called.",
          image: {
            src: "/images/module3/supervised_vs_unsupervised.png",
            alt: "Diagram comparing supervised and unsupervised learning"
          }
        },
        {
          title: "The Supervised Learning Process",
          content: "The supervised learning process involves several steps: 1) Collect labeled data with known answers, 2) Prepare the data by cleaning and organizing it, 3) Split into training and testing sets, 4) Train the model so it learns patterns from the training data, 5) Evaluate the model on the testing data, and 6) Use the model to make predictions on new examples.",
        },
        {
          title: "Types of Supervised Learning Problems",
          content: "There are two main types of supervised learning problems: Classification and Regression. Classification involves predicting which category something belongs to (like spam vs. not spam, or which animal is in a picture). The output is a discrete category or class. Regression involves predicting a continuous numerical value (like temperature, house prices, or trip duration). The output is a number on a continuous scale.",
        },
        {
          title: "Real-World Applications",
          content: "Supervised learning is used in many applications we encounter daily, including image recognition for identifying objects in photos, spam filters for classifying emails, medical diagnosis for predicting diseases based on symptoms, price prediction for estimating values of houses or products, and sentiment analysis for determining if text expresses positive or negative emotions.",
        }
      ],
      activity: {
        title: "Human Supervised Learning",
        description: "In this activity, you'll work with a partner to simulate supervised learning. One person will be the 'algorithm' and the other the 'teacher.' The teacher will show shapes and tell the algorithm which class each belongs to. After training, the algorithm will try to classify new shapes.",
        interactive: true,
        link: "/activities/supervised-learning-simulation"
      },
      checkUnderstanding: [
        "What makes supervised learning 'supervised'?",
        "What's the difference between classification and regression?",
        "Why do we split data into training and testing sets?",
        "Give an example of a classification problem and a regression problem.",
        "What kind of data is needed for supervised learning?"
      ],
      furtherResources: [
        {
          title: "Teachable Machine by Google",
          link: "https://teachablemachine.withgoogle.com/",
          description: "Create your own image classifier without coding"
        },
        {
          title: "Machine Learning for Kids - Supervised Learning Projects",
          link: "https://machinelearningforkids.co.uk/",
          description: "Hands-on projects for young learners"
        },
        {
          title: "Simple Supervised Learning Examples",
          link: "https://www.youtube.com/watch?v=wjTJVhmu1JM",
          description: "Video with easy-to-understand examples"
        }
      ]
    };
  }
  
  // Default lesson content if specific content not found
  return {
    title: `Lesson ${lessonId}`,
    learningObjectives: [
      "Understand key concepts related to this lesson",
      "Apply knowledge to solve problems",
      "Analyze examples and identify patterns",
      "Create your own examples based on the concepts learned"
    ],
    vocabulary: {
      "Term 1": "Definition of term 1",
      "Term 2": "Definition of term 2",
      "Term 3": "Definition of term 3",
      "Term 4": "Definition of term 4"
    },
    sections: [
      {
        title: "Introduction",
        content: "This is the introduction to the lesson. It provides an overview of what will be covered and why it's important.",
      },
      {
        title: "Main Concept",
        content: "This section explains the main concept of the lesson in detail, with examples and explanations.",
      },
      {
        title: "Examples and Applications",
        content: "This section provides real-world examples and applications of the concept being taught.",
      }
    ],
    activity: {
      title: "Hands-on Activity",
      description: "This activity helps reinforce the concepts learned in the lesson through practical application.",
      interactive: false
    },
    checkUnderstanding: [
      "Question 1 about the lesson content?",
      "Question 2 about the lesson content?",
      "Question 3 about the lesson content?",
      "Question 4 about the lesson content?"
    ],
    furtherResources: [
      {
        title: "Resource 1",
        link: "#",
        description: "Description of resource 1"
      },
      {
        title: "Resource 2",
        link: "#",
        description: "Description of resource 2"
      }
    ]
  };
}
