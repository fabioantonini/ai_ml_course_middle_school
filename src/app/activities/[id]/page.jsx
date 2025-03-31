import React from 'react';
import Link from 'next/link';

export default function ActivityLayout({ params }) {
  const activityId = params.id;
  const activityData = getActivityData(activityId);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-700">← Back to Home</a>
        </Link>
      </nav>
      
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-green-600 mb-2">{activityData.title}</h1>
        <p className="text-xl text-gray-600">{activityData.description}</p>
      </header>
      
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About This Activity</h2>
          <p className="mb-4">{activityData.about}</p>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Learning Goals</h3>
            <ul className="list-disc pl-6 space-y-1">
              {activityData.learningGoals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ol className="list-decimal pl-6 space-y-3">
            {activityData.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
        
        {activityData.image && (
          <div className="mb-8">
            <div className="bg-gray-100 p-4 rounded-lg flex justify-center">
              <img 
                src={activityData.image.src} 
                alt={activityData.image.alt}
                className="max-w-full h-auto rounded"
              />
            </div>
            {activityData.image.caption && (
              <p className="text-center text-gray-600 mt-2">{activityData.image.caption}</p>
            )}
          </div>
        )}
        
        <div className="mt-8 pt-4 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Start the Activity</h2>
          <p className="mb-4">{activityData.startPrompt}</p>
          <div className="flex justify-center">
            <Link href={activityData.activityLink}>
              <a className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-bold">
                Launch Interactive Activity
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Related Concepts</h2>
        <p className="mb-4">This activity helps you understand these important concepts:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activityData.relatedConcepts.map((concept, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold mb-1">{concept.term}</h3>
              <p className="text-sm">{concept.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Related Modules</h3>
          <ul className="space-y-2">
            {activityData.relatedModules.map((module, index) => (
              <li key={index}>
                <Link href={`/modules/${module.id}`}>
                  <a className="text-blue-500 hover:text-blue-700">
                    Module {module.id}: {module.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function getActivityData(activityId) {
  const activities = {
    "quiz": {
      title: "AI Identification Quiz",
      description: "Test your knowledge of AI concepts with this interactive quiz",
      about: "This quiz covers key concepts from all modules of the course, including AI vs. non-AI technologies, supervised and unsupervised learning, LLMs, and attention mechanisms. It's a great way to check your understanding of the material.",
      learningGoals: [
        "Identify examples of AI in everyday technology",
        "Distinguish between different types of machine learning",
        "Understand key concepts related to Large Language Models",
        "Recognize ethical considerations in AI development and use"
      ],
      instructions: [
        "Read each question carefully and consider all answer options",
        "Select the answer you believe is correct",
        "After selecting an answer, you'll see an explanation of the correct answer",
        "Continue through all questions to get your final score",
        "You can retake the quiz as many times as you want to improve your understanding"
      ],
      image: {
        src: "/images/activities/quiz_preview.png",
        alt: "Preview of the AI Identification Quiz",
        caption: "The quiz includes multiple-choice questions with explanations for each answer"
      },
      startPrompt: "Ready to test your knowledge of AI concepts? Click the button below to start the quiz!",
      activityLink: "/activities/ai_identification_quiz.html",
      relatedConcepts: [
        { term: "Artificial Intelligence", description: "Computer systems that can perform tasks that normally require human intelligence" },
        { term: "Machine Learning", description: "A subset of AI where computers learn from data without being explicitly programmed" },
        { term: "Supervised Learning", description: "Learning from labeled examples where the correct answers are provided" },
        { term: "Large Language Models", description: "AI systems trained on vast amounts of text that can understand and generate human language" }
      ],
      relatedModules: [
        { id: "1", title: "Introduction to AI" },
        { id: "2", title: "How Machines Learn" },
        { id: "3", title: "Supervised and Unsupervised Learning" },
        { id: "4", title: "Large Language Models and Attention Mechanisms" }
      ]
    },
    "image-classification": {
      title: "Image Classification Activity",
      description: "Experience supervised learning by training and testing an image classifier",
      about: "This interactive activity lets you experience how supervised learning works by training a simple image classifier. You'll label training images, watch as the model learns from your examples, and then test how well it performs on new images.",
      learningGoals: [
        "Understand how supervised learning uses labeled data to make predictions",
        "Experience the process of training and testing a machine learning model",
        "Recognize the importance of good training data",
        "See how the quality of training affects model performance"
      ],
      instructions: [
        "In Step 1, you'll label training images by selecting the correct category for each image",
        "In Step 2, the computer will learn patterns from your labeled examples",
        "In Step 3, you'll test the model on new images it hasn't seen before",
        "Finally, you'll see how accurate your model was and learn what factors affected its performance"
      ],
      image: {
        src: "/images/activities/image_classification_preview.png",
        alt: "Preview of the Image Classification Activity",
        caption: "The activity simulates training a model to recognize different animals"
      },
      startPrompt: "Ready to train your own image classifier? Click the button below to start the activity!",
      activityLink: "/activities/image-classification-demo",
      relatedConcepts: [
        { term: "Supervised Learning", description: "Learning from labeled examples where the correct answers are provided" },
        { term: "Training Data", description: "Examples used to teach the algorithm patterns" },
        { term: "Classification", description: "Predicting which category something belongs to" },
        { term: "Model Accuracy", description: "How often the model's predictions match the correct answers" }
      ],
      relatedModules: [
        { id: "2", title: "How Machines Learn" },
        { id: "3", title: "Supervised and Unsupervised Learning" }
      ]
    },
    "attention-demo": {
      title: "Attention Mechanism Demo",
      description: "See how AI pays attention to different words to understand meaning",
      about: "This interactive demo shows how attention mechanisms help language models understand relationships between words. You'll see how AI focuses on relevant words to understand context and resolve ambiguities like pronoun references.",
      learningGoals: [
        "Understand how attention mechanisms work in language models",
        "Visualize how AI determines relationships between words",
        "See how context helps resolve ambiguous references",
        "Recognize the importance of attention in language understanding"
      ],
      instructions: [
        "The demo will show you a sentence with a highlighted word (usually a pronoun like 'it' or 'she')",
        "Click 'Show Attention' to see which other words in the sentence are most related to the highlighted word",
        "Darker green indicates stronger attention - these are the words the AI focuses on to understand meaning",
        "Try different examples to see how attention works in various contexts"
      ],
      image: {
        src: "/images/activities/attention_demo_preview.png",
        alt: "Preview of the Attention Mechanism Demo",
        caption: "The demo visualizes attention weights between words in a sentence"
      },
      startPrompt: "Ready to see how AI pays attention to understand language? Click the button below to start the demo!",
      activityLink: "/activities/attention-mechanism-demo",
      relatedConcepts: [
        { term: "Attention Mechanism", description: "A technique that helps AI models focus on relevant parts of input data" },
        { term: "Large Language Models", description: "AI systems trained on vast amounts of text that can understand and generate human language" },
        { term: "Context", description: "The surrounding information that helps determine the meaning of words or phrases" },
        { term: "Transformer", description: "A type of neural network architecture that uses attention mechanisms" }
      ],
      relatedModules: [
        { id: "4", title: "Large Language Models and Attention Mechanisms" }
      ]
    },
    "clustering": {
      title: "Clustering Demo",
      description: "Explore unsupervised learning by grouping data points into clusters",
      about: "This interactive demo lets you experience how unsupervised learning works by clustering data points based on their features. You'll see how algorithms can find natural groupings in data without being told the 'right answers' in advance.",
      learningGoals: [
        "Understand how unsupervised learning finds patterns in unlabeled data",
        "Experience the process of clustering similar data points",
        "Recognize how features determine similarity between data points",
        "Compare your clustering results with the actual groupings"
      ],
      instructions: [
        "In Step 1, you'll explore unlabeled data points on a scatter plot",
        "In Step 2, you'll assign each point to one of three clusters based on their features",
        "In Step 3, you'll compare your clustering with the actual animal groups",
        "You'll see how well your clustering matched the natural groupings in the data"
      ],
      image: {
        src: "/images/activities/clustering_demo_preview.png",
        alt: "Preview of the Clustering Demo",
        caption: "The demo shows data points representing different animals that can be grouped by their features"
      },
      startPrompt: "Ready to try unsupervised learning? Click the button below to start the clustering demo!",
      activityLink: "/activities/clustering-demo",
      relatedConcepts: [
        { term: "Unsupervised Learning", description: "Learning from unlabeled data to find hidden patterns or structures" },
        { term: "Clustering", description: "Grouping similar items together based on their features" },
        { term: "Features", description: "The individual properties or characteristics that the algorithm uses to make decisions" },
        { term: "Similarity", description: "How close or related data points are to each other based on their features" }
      ],
      relatedModules: [
        { id: "2", title: "How Machines Learn" },
        { id: "3", title: "Supervised and Unsupervised Learning" }
      ]
    }
  };
  
  return activities[activityId] || activities["quiz"];
}
