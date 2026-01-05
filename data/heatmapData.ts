export type Entry = {

    model: string
    language_num: string
    score: number
    question: string
    answer: string
    type: string


}
export const questions = [
    {
        language_num: "Py 1",
        question: "What is the difference between calling F.cross_entropy vs cross_entropy?",
        type: "Library Behavior"

    },
    {
        language_num: "Py 2",
        question: "Should I call compact_times() on every KPIset or only cumulative KPIsets?",
        type: "Project Behavior"

    },
    {
        language_num: "Py 3",
        question: "Should we use UTF-8 instead of ASCII as the default encoding when decoding host?",
        type: "Library Behavior"

    },
    {
        language_num: "Py 4",
        question: "Do I need to call deepcopy(result) before modifying result[DATA]?",
        type: "Library Behavior"

    },
    {
        language_num: "Py 5",
        question: "Do we need the check for 'if not build_directory'?",
        type: "Value"

    },
    {
        language_num: "Java 1",
        question: "Does the code at the end of initializeFromLocalSearch depend on drawer?",
        type: "Project Behavior"

    },
    {
        language_num: "Java 2",
        question: "What is the difference in using HashMap vs singletonMap as a parameter to messageParams?",
        type: "Library Behavior"

    },
    {
        language_num: "Java 3",
        question: "Should I add a null check for mPrefix?",
        type: "Value"

    },
    {
        language_num: "Java 4",
        question: "Do I need this null check for roleInfoList?",
        type: "Value"

    },
    {
        language_num: "Java 5",
        question: "Can an exception happen here?",
        type: "Project Behavior"

    },
    {
        language_num: "C++ 1",
        question: "Is there a difference between using operator+ and fmt::format to concatenate the strings '[', cManualBindings::GetLuaPlugin(tolua_S)->GetName(), ']: ', and 'AString(str, len)'?",
        type: "Performance"

    },
    {
        language_num: "C++ 2",
        question: "Can error_code be something other than ECONNREFUSED or ECONNRESET?",
        type: "Value"

    },
    {

        language_num: "C++ 3",
        question: "Is there a difference between using m_sliceTypeStrMap.at(m_sliceType) vs m_sliceTypeStrMap[m_sliceType]?",
        type: "Library Behavior"

    },
    {
        language_num: "C++ 4",
        question: "Is there a difference between returning an empty wstring using return L'''; versus using return {};",
        type: "Performance"

    },
    {
        language_num: "C++ 5",
        question: "Can SQWLoadingPresenter::~SQWLoadingPresenter() {} be removed?",
        type: "Project Behavior"

    },

]

const modelAnswers: Record<string, Record<string, { score: number; answer: string }>> = {
    "Grok 4": {
        "Py 1": { score: 100, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 29.17, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 100.00, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 25.93, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 77.78, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 51.39, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 83.33, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 35.19, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 88.89, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 51.85, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score:  79.17, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
    },
    "Claude Opus 4": {
        "Py 1": { score: 100, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 40.28, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 100.00, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score:  55.56, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score:  62.96, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score:  66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 76.67, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 20.37, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 72.22, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 74.07, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 62.50, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 66.67, answer: "UTF-8 is preferred for decoding host" },
    },
    "Gpt-5": {
        "Py 1": { score: 100, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 30.56, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 50.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 77.78, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 11.11, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 77.78, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 75.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 61.11, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 66.67, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 59.26, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 83.33, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 83.33, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 77.78, answer: "UTF-8 is preferred for decoding host" },
    },
    "Claude Opus 4.1": {
        "Py 1": { score: 100, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 19.44, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 91.67, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 51.85, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 62.96, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 70.83, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 57.41, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 76.67, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 27.78, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 79.63, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 81.48, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 55.56, answer: "UTF-8 is preferred for decoding host" },
    },
    "o3": {
        "Py 1": { score: 58.33, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 36.11, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 83.33, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 77.78, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 22.22, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 55.56, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 62.50, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 80.56, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 66.67, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 55.56, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 74.07, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 74.07, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 75.00, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 72.22, answer: "UTF-8 is preferred for decoding host" },
    },
    "Gemini 2.5 Flash": {
        "Py 1": { score: 75.00, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 20.83, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 100.00, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 33.33, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 48.15, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 62.50, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 77.78, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 76.67, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 24.07, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 72.22, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 75.93, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 79.17, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 72.22, answer: "UTF-8 is preferred for decoding host" },
    },
    "Gemini 2.5 Pro": {
        "Py 1": { score: 83.33, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 47.22, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 50.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 100.00, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 11.11, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 62.96, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 86.11, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 81.11, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 24.07, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 64.81, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 88.89, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 75.00, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 38.89, answer: "UTF-8 is preferred for decoding host" },
    },
    "gpt-oss-20": {
        "Py 1": { score: 50.00, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 27.78, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 66.67, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 48.15, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 62.96, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 62.50, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 71.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 52.78, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 63.33, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 59.26, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 75.93, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 81.48, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 87.50, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 77.78, answer: "UTF-8 is preferred for decoding host" },
    },
    "Claude Sonnet 4": {
        "Py 1": { score: 50.00, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 20.83, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 36.11, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 66.67, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 70.37, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 62.50, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 79.63, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 83.333, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 27.78, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 74.07, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 79.17, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 61.11, answer: "UTF-8 is preferred for decoding host" },
    },
    "Claude Sonnet 3.7": {
        "Py 1": { score: 50.00, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 16.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 50.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 75.00, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 55.56, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 55.56, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 70.83, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 68.52, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 74.44, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 35.19, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 61.11, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 77.78, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 79.17, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 72.22, answer: "UTF-8 is preferred for decoding host" },
    },
    "Qwen 3": {
        "Py 1": { score: 100.00, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 25.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 50.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 58.33, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 40.74, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 40.74, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 68.06, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 58.33, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 77.78, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 61.11, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 61.11, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 33.33, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 79.17, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
    },
    "gpt-oss-120": {
        "Py 1": { score: 75.00, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 4.17, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 50.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 75.00, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 59.26, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 33.33, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 57.41, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 73.33, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score:  46.30, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 72.22, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 62.96, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 87.50, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 50.00, answer: "UTF-8 is preferred for decoding host" },
    },
    "Gpt-4.1": {
        "Py 1": { score: 83.33, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 36.11, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 50.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 27.78, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 14.81, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 33.33, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 70.83, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 86.11, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 46.30, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 61.11, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 59.26, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 87.50, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 72.22, answer: "UTF-8 is preferred for decoding host" },
    },
    "Llama3.3 70": {
        "Py 1": { score: 100.00, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 33.33, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 58.33, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 50.00, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 29.63, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 40.74, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 29.17, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 44.44, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 67.78, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 35.19, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 51.85, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 75.00, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
    },
    "Grok 3": {
        "Py 1": { score: 41.67, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 25.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 50.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 38.89, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 22.22, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 40.74, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 61.11, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 72.22, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 85.56, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 24.07, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 72.22, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 74.07, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 50.00, answer: "UTF-8 is preferred for decoding host" },
    },
    "Deepseek-R1": {
        "Py 1": { score: 83.33, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 11.11, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 33.33, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 33.33, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 29.63, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 33.33, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 62.50, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 66.67, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 85.56, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 20.37, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 61.11, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 62.96, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 75.00, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 77.78, answer: "UTF-8 is preferred for decoding host" },
    },
    "Gemini 2.0 Flash": {
        "Py 1": { score: 58.33, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 25.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 58.33, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 27.78, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 14.81, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 33.33, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 62.50, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 52.78, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 85.56, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 27.78, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 55.56, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 66.67, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 75.00, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
    },
    "Llama 4 Scout": {
        "Py 1": { score: 50.00, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 29.17, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 58.33, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 33.33, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 29.63, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 37.04, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 62.50, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 71.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 55.56, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 70.00, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 61.11, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 61.11, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 33.33, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 75.00, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 66.67, answer: "UTF-8 is preferred for decoding host" },
    },
    "Qwen 3 Coder": {
        "Py 1": { score: 100.00, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 13.89, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 50.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 16.67, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 40.74, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 33.33, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 51.39, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 57.41, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 76.67, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 24.07, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 61.11, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 40.74, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 50.00, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 50.00, answer: "UTF-8 is preferred for decoding host" },
    },
    "Mistral Large": {
        "Py 1": { score: 66.67, answer: "Use F.cross_entropy when you want logits..." },
        "Py 2": { score: 16.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 3": { score: 16.67, answer: "Only cumulative KPIsets require compact_times()" },
        "Py 4": { score: 27.78, answer: "UTF-8 is preferred for decoding host" },
        "Py 5": { score: 25.93, answer: "UTF-8 is preferred for decoding host" },
        "Java 1": { score: 48.15, answer: "Use F.cross_entropy when you want logits..." },
        "Java 2": { score: 61.11, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 3": { score: 80.00, answer: "Only cumulative KPIsets require compact_times()" },
        "Java 4": { score: 44.44, answer: "UTF-8 is preferred for decoding host" },
        "Java 5": { score: 61.11, answer: "UTF-8 is preferred for decoding host" },
        "C++ 1": { score: 31.48, answer: "Use F.cross_entropy when you want logits..." },
        "C++ 2": { score: 61.11, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 3": { score: 33.33, answer: "Only cumulative KPIsets require compact_times()" },
        "C++ 4": { score: 83.33, answer: "UTF-8 is preferred for decoding host" },
        "C++ 5": { score: 72.22, answer: "UTF-8 is preferred for decoding host" },
    },

};



export const models = [
    "Grok 4",
    "Claude Opus 4",
    "Gpt-5",
    "Claude Opus 4.1",
    "o3",
    "Gemini 2.5 Flash",
    "Gemini 2.5 Pro",
    "gpt-oss-20",
    "Claude Sonnet 4",
    "Claude Sonnet 3.7",
    "Qwen 3",
    "gpt-oss-120",
    "Gpt-4.1",
    "Llama3.3 70",
    "Grok 3",
    "Deepseek-R1",
    "Gemini 2.0 Flash",
    "Llama 4 Scout",
    "Qwen 3 Coder",
    "Mistral Large",

]

export const heatmapData: Entry[] = models.flatMap(model =>
    questions.map(q => {
        const entryData = modelAnswers[model]?.[q.language_num] ?? { score: 0, answer: "" };

        return {
            model,
            language_num: q.language_num,
            score: entryData.score,
            answer: entryData.answer,
            question: q.question,
            type: q.type,
        };
    })
);
