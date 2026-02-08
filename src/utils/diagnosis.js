const DIAGNOSIS_RULES = [
  {
    match: ['fever', 'cough', 'fatigue'],
    result: {
      condition: 'Seasonal Influenza',
      confidence: 82,
      explanation:
        'Your symptoms align with a common viral respiratory infection. Rest and hydration are essential while monitoring any worsening signs.',
      actions: ['Rest and stay hydrated', 'Monitor temperature twice daily', 'Consult a clinician if symptoms persist beyond 5 days'],
      medications: ['Paracetamol (acetaminophen)', 'Ibuprofen', 'Oral rehydration salts'],
      precautions: ['Avoid close contact with others', 'Practice frequent handwashing', 'Wear a mask if you must go out']
    }
  },
  {
    match: ['headache', 'nausea', 'light sensitivity'],
    result: {
      condition: 'Migraine Episode',
      confidence: 78,
      explanation:
        'The combination of headache, nausea, and light sensitivity commonly appears in migraines. Identifying triggers can reduce recurrence.',
      actions: ['Rest in a dark quiet room', 'Hydrate and eat small meals', 'Reach out to a healthcare professional if pain is severe'],
      medications: ['NSAIDs (e.g., ibuprofen)', 'Triptans (prescription)', 'Anti-nausea medication'],
      precautions: ['Limit screen exposure', 'Track potential triggers', 'Maintain regular sleep patterns']
    }
  },
  {
    match: ['sore throat', 'runny nose', 'sneezing'],
    result: {
      condition: 'Common Cold',
      confidence: 74,
      explanation:
        'Upper respiratory symptoms without high fever often suggest a common cold. Supportive care typically resolves symptoms within a week.',
      actions: ['Stay hydrated and rest', 'Use saline nasal spray', 'Consult a clinician if fever develops'],
      medications: ['Decongestants', 'Throat lozenges', 'Antihistamines'],
      precautions: ['Avoid sharing utensils', 'Cover coughs and sneezes', 'Disinfect frequently touched surfaces']
    }
  }
];

const DEFAULT_RESULT = {
  condition: 'General Viral Syndrome',
  confidence: 65,
  explanation:
    'The symptoms suggest a general viral condition. Keep track of changes and seek medical guidance if symptoms worsen.',
  actions: ['Rest and hydrate', 'Keep a symptom diary', 'Seek medical advice if symptoms intensify'],
  medications: ['Paracetamol (acetaminophen)', 'Electrolyte solutions', 'Vitamin C supplements'],
  precautions: ['Limit strenuous activity', 'Monitor body temperature', 'Avoid exposure to extreme temperatures']
};

const matchRule = (symptoms, rule) => rule.match.every((term) => symptoms.includes(term));

export const analyzeSymptoms = (symptoms) => {
  const normalized = symptoms.map((symptom) => symptom.toLowerCase().trim());
  const matchedRule = DIAGNOSIS_RULES.find((rule) => matchRule(normalized, rule));
  return matchedRule ? matchedRule.result : DEFAULT_RESULT;
};
