import os
import json
import ollama

# Path to your source JSON (en.json)
source_locale = 'en'
source_file_path = os.path.join(os.getcwd(), f'src/locales/{source_locale}.json')

# List of target locales 

languageMaps={

  "en": "English",
  "hi": "Hindi",
  "es": "Spanish",
  "af": "Afrikaans",
  "sq": "Albanian",
  "ar": "Arabic",
  "hy": "Armenian",
  "bn": "Bengali",
  "bs": "Bosnian",
  "ca": "Catalan",
  "hr": "Croatian",
  "cs": "Czech",
  "da": "Danish",
  "nl": "Dutch",
  "eo": "Esperanto",
  "et": "Estonian",
  "tl": "Filipino",
  "fi": "Finnish",
  "fr": "French",
  "de": "German",
  "el": "Greek",
  "gu": "Gujarati",
  "hu": "Hungarian",
  "is": "Icelandic",
  "id": "Indonesian",
  "it": "Italian",
  "ja": "Japanese",
  "jw": "Javanese",
  "kn": "Kannada",
  "ko": "Korean",
  "la": "Latin",
  "lv": "Latvian",
  "mk": "Macedonian",
  "ml": "Malayalam",
  "mr": "Marathi",
  "ne": "Nepali",
  "pl": "Polish",
  "pt": "Portuguese",
  "pa": "Punjabi",
  "ro": "Romanian",
  "ru": "Russian",
  "sr": "Serbian",
  "si": "Sinhala",
  "su": "Sundanese",
  "sw": "Swahili",
  "sv": "Swedish",
  "ta": "Tamil",
  "te": "Telugu",
  "th": "Thai",
  "tr": "Turkish",
  "uk": "Ukrainian",
  "ur": "Urdu",
  "vi": "Vietnamese",
  "cy": "Welsh",
  "xh": "Xhosa",
  "yi": "Yiddish",
  "zu": "Zulu",
  "zh": "Chinese",
  "he": "Hebrew",
  "ms": "Malay",
  "am": "Amharic",
}

target_locales  = list(languageMaps.keys())


# Read the source JSON file (en.json or the source locale)
with open(source_file_path, 'r', encoding='utf-8') as f:
    source_translations = json.load(f)

# Function to call Ollama API for translation
def translate_text(text, target_lang):
    try:
        prompt = f"My name is Amal. Imagine you're an expert translator for {languageMaps[target_lang]}. You only reply with the translated text. Give the most appropriate and only one translation in case there are multiple options. Use native script while translating and don't use English if a native script exists. No notes. Do not add anything extra. This is for a website. Translate the following text to your language. \n \"{text}\""
        response = ollama.generate(model='llama3.2', prompt=prompt)["response"]
        
        return response
    except Exception as e:
        print(f"Error translating text: {text}, {e}")
        return None
    
total_tasks = len(source_translations.items()) * len(target_locales)


# Function to generate translation files for each target locale
def generate_translations():
    progress = 0
    for target_locale in target_locales:
        translated_file = {}
        print("\n\n==================================================")
        print(f"Translating {target_locale}")
        print("==================================================")

        # Translate each string (key-value pair) in the source file
        for key, _ in source_translations.items():
            
            progress=progress+1
            translated_text = translate_text(key, target_locale)

            if(target_locale == "en"):
              translated_text = key    

            if translated_text:
                translated_file[key] = translated_text
                progressPercent = progress/total_tasks * 100
                print(f"\n\n[{progressPercent:.10f}% ({progress}/{total_tasks})]\n[{target_locale}] \nKey: '{key}' \nTranslation: {translated_text}")
            

        # Save the translated content to a new JSON file for each locale (e.g., es.json, fr.json)
        target_file_path = os.path.join(os.getcwd(), f'src/locales/{target_locale}.json')
        with open(target_file_path, 'w', encoding='utf-8') as f:
            json.dump(translated_file, f, ensure_ascii=False, indent=2)

        print(f"\nGenerated {target_locale}.json translation file")

def generate_locale_index():
    content = ""
    for target_locale in target_locales:
        content+=f"import {target_locale} from './{target_locale}.json';\n"
    content+="\nexport const resources = {\n"
    for target_locale in target_locales:
        content+=f"  {target_locale}: {{ translation: {target_locale} }},\n"
    content+="};\n"
    target_file_path = os.path.join(os.getcwd(), f'src/locales/index.ts')

    with open(target_file_path, 'w', encoding='utf-8') as f:
            f.write(content)

    print("Generated index file")
    
# Run the translation process
if __name__ == '__main__':
    generate_translations()
    generate_locale_index()
    print("Translation process completed!")
