def to_camel_case(text):
  if text == "":
    return ""

  i = 1
  result = []

  result.append(text[0])

  while i < len(text):
    if text[i] == "-" or text[i] == "_":
      i += 1
    elif text[i - 1] == "-" or text[i - 1] == "_":
      result.append(text[i].upper())
      i += 1
    else:
      result.append(text[i].lower())
      i += 1

  # print(result)
  return "".join(result)

print(to_camel_case("the-stealth-warrior"))
