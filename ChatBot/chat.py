import openai
import os
from openai import OpenAI
# openai.api_key = os.environ.get("OPENAI_API_KEY", "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")
client = OpenAI(
    api_key="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",
)
def generate_response(prompt):
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )

        # Extract the response from the assistant
        assistant_response = response['choices'][0]['message']['content']
        return assistant_response

    except Exception as e:
        return f"An error occurred: {e}"

# Example usage
if __name__ == "__main__":
    user_prompt = input("Enter your prompt: ")
    response = generate_response(user_prompt)
    print("Assistant Response:", response)
