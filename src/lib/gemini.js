// Google Gemini Service (Hybrid Mode)

// Check if API key exists
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const IS_ENABLED = !!API_KEY || true // Always enabled (falls back to simulation)

export const isAIEnabled = () => IS_ENABLED

// Generic Search Function (Router)
export const aiSearch = async (query, treaties, cases, resolutions) => {
    // If we have a real key, use Gemini
    if (API_KEY) {
        return await geminiRealSearch(query, treaties, cases, resolutions)
    }
    // Otherwise, simulate AI locally
    return await simulateAISearch(query, treaties, cases, resolutions)
}

// 1. Real Gemini Search (Future Use)
const geminiRealSearch = async (query, treaties, cases, resolutions) => {
    try {
        const { GoogleGenerativeAI } = await import('@google/generative-ai')
        const genAI = new GoogleGenerativeAI(API_KEY)
        const model = genAI.getGenerativeModel({ model: "gemini-pro" })

        // Prepare Context
        const context = `
        أنت مساعد قانوني ذكي متخصص في القانون الدولي.
        لديك هذه البيانات:
        - الاتفاقيات: ${treaties.map(t => t.name).join(', ')}
        - القضايا: ${cases.map(c => c.name).join(', ')}
        
        أجب عن سؤال المستخدم بناءً على هذه البيانات ومعرفتك العامة بالقانون الدولي.
        اجعل الإجابة مختصرة ومفيدة وباللغة العربية.
        السؤال: ${query}
        `

        const result = await model.generateContent(context)
        const response = await result.response
        return response.text()
    } catch (error) {
        console.error("Gemini Error:", error)
        throw new Error("عذراً، فشل الاتصال بالذكاء الاصطناعي. " + error.message)
    }
}

// 2. Simulated AI Search (Local Logic)
const simulateAISearch = async (query, treaties, cases, resolutions) => {
    // Simulate thinking delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const lowerQuery = query.toLowerCase()

    // Search in Data
    const relevantTreaties = treaties.filter(t => t.name.includes(query) || t.description?.includes(query))
    const relevantCases = cases.filter(c => c.name.includes(query) || c.summary?.includes(query))

    let response = ''

    if (relevantTreaties.length > 0) {
        response += `بناءً على البحث في قاعدة البيانات، وجدت اتفاقيات ذات صلة بموضوعك، أهمها "${relevantTreaties[0].name}". `
        response += `هذه الاتفاقية تهدف إلى ${relevantTreaties[0].description || 'تنظيم العلاقات الدولية في هذا المجال'}. `
    }

    if (relevantCases.length > 0) {
        response += `\n\nكما توجد سوابق قضائية مهمة مثل قضية "${relevantCases[0].name}" (${relevantCases[0].year}) التي نظرت فيها ${relevantCases[0].court}. `
        response += `حيث أكدت المحكمة في هذه القضية على مبادئ قانونية هامة. `
    }

    if (!response) {
        // Fallback for general questions
        if (query.includes('فلسطين') || query.includes('إسرائيل') || query.includes('غزة')) {
            response = "القانون الدولي ينص بوضوح على حق تقرير المصير وحماية المدنيين في النزاعات المسلحة (اتفاقيات جنيف). هناك العديد من القرارات الدولية (مثل قرار 242 و 338) والرأي الاستشاري لمحكمة العدل الدولية بخصوص الجدار العازل."
        } else if (query.includes('حقوق الإنسان')) {
            response = "حقوق الإنسان هي المبادئ الأساسية التي تحمي كرامة جميع البشر. الإعلان العالمي لحقوق الإنسان (1948) هو حجر الزاوية، يليه العهدان الدوليان لعام 1966. جميع الدول ملزمة باحترام هذه الحقوق."
        } else if (query.includes('بحار') || query.includes('مياه')) {
            response = "قانون البحار تنظمه اتفاقية الأمم المتحدة لقانون البحار (UNCLOS) لعام 1982. هي تحدد المناطق البحرية (المياه الإقليمية 12 ميل، المنطقة الاقتصادية الخالصة 200 ميل) وحقوق الدول فيها."
        } else {
            response = "سؤال قانوني مثير للاهتمام! في القانون الدولي، يعتمد هذا الموضوع عادةً على المعاهدات الثنائية والجماعية، بالإضافة إلى العرف الدولي. يُنصح بالرجوع إلى اتفاقية فيينا لقانون المعاهدات لفهم الإطار العام."
        }
    }

    return response
}

// Semantic Search (Keyword Matching)
export const semanticSearch = async (query, treaties, cases, resolutions) => {
    return {
        treaties: treaties.filter(t => t.name.includes(query) || t.topic.includes(query)),
        cases: cases.filter(c => c.name.includes(query) || c.court.includes(query)),
        resolutions: resolutions.filter(r => r.number.includes(query) || r.topic.includes(query))
    }
}
