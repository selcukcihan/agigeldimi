"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Bot, Brain, Sparkles, Share2 } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Yapay zekâ sana bir Orhan Veli şiiri yazabilir mi?",
    options: [
      "Evet, gözlerim doldu",
      "Hayır, çok yapay duruyor",
      "Deniyor ama beceremedi",
      "Şiir mi o da ne?",
    ],
  },
  {
    id: 2,
    question: "Yapay zekâ hiç 'bugün çok yorgunum, yarın konuşalım' dedi mi?",
    options: [
      "Evet, ara sıra mola veriyor",
      "Asla, yorulmak nedir bilmez",
      "Yorgun numarası yapıyor",
      "Yarım gün çalışıyor zaten",
    ],
  },
  {
    id: 3,
    question:
      "Yapay zekâ neden lahmacun'un çiğ köfteden daha güzel olduğunu açıklayabilir mi?",
    options: [
      "Evet, bilimsel olarak açıklıyor",
      "Hayır, kafası karışıyor",
      "Genel geçer cevaplar veriyor",
      "O iskender seviyormuş",
    ],
  },
  {
    id: 4,
    question: "Yapay zekâ hiç seninle tartışıp kazandı mı?",
    options: [
      "Evet, hakikaten haklıydı",
      "Asla, ben hep haklıyım",
      "Orta yolu bulduk",
      "Hala tartışıyoruz",
    ],
  },
  {
    id: 5,
    question: "Yapay zekâ hangi takımı tutuyor?",
    options: ["Cimbom", "Fenerliymiş", "Osasuna", "Milli takım"],
  },
];

export default function AGIQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption) {
      setAnswers([...answers, selectedOption]);
      setSelectedOption("");
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const calculateResult = () => {
    // Playful scoring based on specific answer combinations
    const funnyResponses = answers.filter(
      (answer) =>
        answer === "Evet, gözlerim doldu" ||
        answer === "Evet, ara sıra mola veriyor" ||
        answer === "Evet, bilimsel olarak açıklıyor" ||
        answer === "Evet, hakikaten haklıydı" ||
        answer === "Cimbom"
    ).length;

    if (funnyResponses >= 4) {
      return {
        title: "AGI Gelmiş! (Herhalde?)",
        description:
          "Ya AGI'ye ulaştık, ya da yapay zekâ rol yapma konusunda çok başarılı. Robot efendilerimizi selamlama vakti!",
        icon: <Sparkles className="h-12 w-12 text-yellow-500" />,
      };
    } else if (funnyResponses >= 2) {
      return {
        title: "Yaklaşıyoruz!",
        description:
          "Tam AGI değil ama yapay zekâ şaşırtıcı derecede insansı özellikler gösteriyor. Gözün üstünde olsun!",
        icon: <Brain className="h-12 w-12 text-purple-500" />,
      };
    } else {
      return {
        title: "Henüz Değil!",
        description: "Yapay zekâ hala bariz bir makine. Ama en azından dürüst!",
        icon: <Bot className="h-12 w-12 text-blue-500" />,
      };
    }
  };

  const progress =
    ((currentQuestion + (selectedOption ? 1 : 0)) / questions.length) * 100;

  if (showResult) {
    const result = calculateResult();
    return (
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">{result.icon}</div>
          <CardTitle className="text-2xl mb-2">{result.title}</CardTitle>
          <CardDescription className="text-lg">
            {result.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2 w-full">
          <Button
            className="w-full"
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers([]);
              setShowResult(false);
            }}
          >
            Tekrar Dene
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              const text = `${result.title}\n\n${result.description} #agigeldimi \n\nSen de AGI testini dene:`;
              const url = window.location.href;
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  text
                )}&url=${encodeURIComponent(url)}`,
                "_blank"
              );
            }}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Twitter&apos;da Paylaş
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">AGI Nedir?</CardTitle>
          <CardDescription className="text-base space-y-2">
            <p>
              AGI (Artificial General Intelligence - Yapay Genel Zeka), insanlar
              gibi düşünebilen, öğrenebilen ve her türlü problemi çözebilen
              yapay zeka sistemlerini ifade eder.
            </p>
            <p>
              Günümüzdeki yapay zeka sistemleri sadece belirli görevleri yerine
              getirebilirken (örneğin: resim çizmek, metin yazmak), AGI herhangi
              bir konuda insan gibi düşünüp karar verebilecek.
            </p>
            <p>
              Peki, yapay zekâ AGI seviyesine ulaşmış mı? Hadi test edelim! 🤖
            </p>
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">AGI Tespit Testi</CardTitle>
          <CardDescription>
            AGI&apos;ye ulaşıp ulaşmadığımızı anlamak için bu soruları yanıtla
          </CardDescription>
          <Progress value={progress} className="mt-2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">
              {questions[currentQuestion].question}
            </h2>
            <RadioGroup
              value={selectedOption}
              onValueChange={setSelectedOption}
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 rounded-lg border p-4 transition-colors ${
                    selectedOption === option ? "bg-muted" : ""
                  }`}
                >
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-grow cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion === questions.length - 1
              ? "Sonuçları Göster"
              : "Sonraki Soru"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
