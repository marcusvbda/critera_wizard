const sections = [
	{
		"show_level_crud": true,
		"questions": [
			{
				"text": "<p>Oi, tudo bem?</p>Seja bem vindo à Critera<p>",
				"subtext": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Sit amet justo donec enim diam. Enim nunc faucibus a pellentesque sit amet porttitor eget. Massa tincidunt dui ut ornare lectus sit amet est.",
				"input": {
					"placeholder": "Como podemos te chamar ?",
					"field": "nick_name",
					"type": "text",
					"validation_rule": "\\S"
				}
			}
		]
	},
	{
		"number": "01",
		"title": "Informações pessoais",
		"progress_color": "#AED145",
		"show_level_crud": true,
		"questions": [
			{
				"text": "<p>{{context.nick_name}}, qual é seu nome completo ?<p>",
				"input": {
					"placeholder": "Ex: João da Silva",
					"field": "full_name",
					"type": "text",
					"validation_rule": "^\\s*\\S+(?:\\s+\\S+)+\\s*$"
				}
			},
			{
				"text": "<p>Qual o número do seu CPF?<p>",
				"input": {
					"placeholder": "000.000.000-00",
					"field": "doc_number",
					"type": "text",
					"validation_rule": "^.{13,}$",
					"mask": "###.###.###-##"
				}
			},
			{
				"text": "<p>Qual sua data de nascimento?<p>",
				"input": {
					"placeholder": "dia/mês/ano",
					"field": "birthdate",
					"type": "text",
					"validation_rule": "^\\d{2}\\\/\\d{2}\\\/\\d{4}$",
					"mask": "##/##/####"
				}
			},
			{
				"text": "<p>Qual seu gênero?<p>",
				"input": {
					"field": "gender",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Masculino", "Feminino"]
				}
			},
			{
				"text": "<p>Qual seu estado civil?<p>",
				"input": {
					"field": "marital_status",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Casado", "Divorciado", "Namorando", "Solteiro"]
				}
			},
			{
				"text": "<p>Você tem filhos?<p>",
				"input": {
					"field": "has_children",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Sim", "Não"]
				}
			},
			{
				"text": "<p>Nível de escolaridade?<p>",
				"input": {
					"field": "level_of_education",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Médio incompleto", "Médio completo", "Superior incompleto", "Superior completo"]
				}
			},
			{
				"text": "<p>Qual sua altura?<p>",
				"input": {
					"placeholder": "Ex: 1.60",
					"field": "height",
					"type": "text",
					"validation_rule": "^\\d+(\\.\\d+)?$"
				}
			},
			{
				"text": "<p>Qual o seu peso?<p>",
				"input": {
					"placeholder": "Ex: 74 Kg",
					"field": "weight",
					"type": "text",
					"validation_rule": "\\S"
				}
			}
		]
	},
	{
		"number": "02",
		"title": "Saúde",
		"progress_color": "#6D5DC7",
		"show_level_crud": true,
		"questions": [
			{
				"text": "<p>De um modo geral, como você avaliaria o seu estado de saúde hoje?<p>",
				"input": {
					"field": "level_of_mental_health",
					"type": "ball-input",
					"validation_rule": "\\S",
					"options": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
				}
			},
			{
				"text": "<p>Cardiovascular<p>",
				"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
				"input": {
					"field": "cardiovascular",
					"default": [],
					"type": "checkbox",
					"validation_rule": "\\S",
					"options": [
						"Pressão alta",
						"Colesterol alto",
						"Arritimia cardíaca",
						"Insuficiência cardíaca",
						"Infarto do Miocardio",
						"Doença na valvula cardíaca"
					]
				}
			},
			{
				"text": "<p>Endocrinologia<p>",
				"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
				"input": {
					"field": "endocrinology",
					"default": [],
					"type": "checkbox",
					"validation_rule": "\\S",
					"options": ["Diabetes", "Hipotireoidismo", "Hipertireoidismo", "Câncer de treóide", "Obesidade"]
				}
			},
			{
				"text": "<p>Respiratória<p>",
				"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
				"input": {
					"field": "breathing",
					"default": [],
					"type": "checkbox",
					"validation_rule": "\\S",
					"options": [
						"Asma",
						"Rinite Alérgica",
						"Sinusite",
						"Doença Pulmonar Obstrutiva Crônica (DPOC)/Enfisema",
						"Câncer de Pulmão",
						"Tuberculose"
					]
				}
			},
			{
				"text": "<p>Gastrointestinal<p>",
				"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
				"input": {
					"field": "gastrointestinal",
					"default": [],
					"type": "checkbox",
					"validation_rule": "\\S",
					"options": [
						"Gastrite/Ulcera",
						"Refluxo gastroesofagico",
						"Hernia inguinal ou umbilical",
						"Retrocolite ulcerativa",
						"Doença de Crohn",
						"Sindrome do colon irritável",
						"Câncer estômago",
						"Cânecer intestino"
					]
				}
			},
			{
				"text": "<p>Sistema Nervoso<p>",
				"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
				"input": {
					"field": "nervous_system",
					"default": [],
					"type": "checkbox",
					"validation_rule": "\\S",
					"options": [
						"Dor de cabeça",
						"Enxaqueca",
						"Acidente Vascular Cerebral",
						"Acidente Isquêmico Transitório",
						"Doença auto-imune sistema nervoso",
						"Esclerose múltipla",
						"Câncer sistema nervoso",
						"Cânecer intestino"
					]
				}
			},
			{
				"text": "<p>Osteomuscular / Reumatológico<p>",
				"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
				"input": {
					"field": "osteomuscular_rheumatological",
					"default": [],
					"type": "checkbox",
					"validation_rule": "\\S",
					"options": [
						"Dores coluna",
						"Protusão discal/Hernia de disco",
						"Fibromialgia",
						"Traumas",
						"Artrite reumatóide",
						"Lupus eritematoso sistemico",
						"Outras doenças auto-imunes"
					]
				}
			},
			{
				"text": "<p>Oftalmológica<p>",
				"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
				"input": {
					"field": "ophthalmology",
					"default": [],
					"type": "checkbox",
					"validation_rule": "\\S",
					"options": [
						"Doença Refrativa (miopia, astimagtismo, presbiopia)",
						"Glaucoma",
						"Catarata"
					]
				}
			},
			{
				"text": "<p>Otorrinolaringologia<p>",
				"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
				"input": {
					"field": "otorhinolaryngology",
					"default": [],
					"type": "checkbox",
					"validation_rule": "\\S",
					"options": ["Dificuldade de escutar", "Zumbido", "Tontura/Vertigem", "Tumores"]
				}
			},
			{
				"condition": "gender",
				"condition_type": "=",
				"Masculino": {
					"text": "<p>Urologia<p>",
					"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
					"input": {
						"field": "urology",
						"default": [],
						"type": "checkbox",
						"validation_rule": "\\S",
						"options": ["Uretrite", "Disfunção erétil", "Hiperplasia Benigna da prostata", "Câncer próstata"]
					}
				},
				"Feminino": {
					"text": "<p>Ginecologia<p>",
					"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
					"input": {
						"field": "urology",
						"default": [],
						"type": "checkbox",
						"validation_rule": "\\S",
						"options": ["Tensão pré-menstrual", "Mioma", "Endometriose", "Câncer de mama", "Câncer de ovário", "Câncer de colo de utéro"]
					}
				}
			},
			{
				"text": "<p>Pele<p>",
				"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
				"input": {
					"field": "skin",
					"default": [],
					"type": "checkbox",
					"validation_rule": "\\S",
					"options": ["Dermatite atópica", "Outras dermatites", "Psoriase", "Câncer de pele (basocelular ou espinocelular)", "Melanoma"]
				}
			},
			{
				"text": "<p>Alergias<p>",
				"subtext": "Dos problemas de saúde listados abaixo, selecione aqueles que você já teve ou tem atualmente.",
				"input": {
					"field": "allergies",
					"default": [],
					"type": "checkbox",
					"validation_rule": "\\S",
					"options": [
						"Intolerância a lactose",
						"Intolerância a gluten",
						"Alergias alimentares"
					]
				}
			}
		]
	},
	{
		"number": "03",
		"title": "Hábitos",
		"progress_color": "#71CBE6",
		"questions": [
			{
				"text": "<p>Você fuma?<p>",
				"input": {
					"field": "smoker",
					"default": [],
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Sim", "Não", "Não fuma há mais de 6 meses"]
				}
			},
			{
				"condition": "smoker",
				"condition_type": "=",
				"Sim": {
					"text": "<p>Quanto tempo depois de acordar você fuma o primeiro cigarro?<p>",
					"input": {
						"field": "first_cigarette",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Após 60 minutos", "Entre 31 e 60 minutos", "Entre seis e 30 mintuos", "Nos primeiros 5 minutos"]
					}
				}
			},
			{
				"text": "<p>Eu tive dificuldade para respirar<p>",
				"subtext": "Por exemplo: igrejas, local de trabalho, cinemas, shoppings, etc...",
				"input": {
					"field": "difficulty_breathing",
					"default": [],
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Sim", "Não"]
				}
			},
			{
				"condition": "smoker",
				"condition_type": "=",
				"Sim": {
					"text": "<p>Qual o cigarro mais difícil de largar de fumar?<p>",
					"input": {
						"field": "harder_cigarette",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["O primeiro da manhã", "Qualquer outro"]
					}
				}
			},
			{
				"condition": "smoker",
				"condition_type": "=",
				"Sim": {
					"text": "<p>Quantos cigarros você fuma por dia?<p>",
					"input": {
						"field": "cigarette_per_day",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Menos de 10 cigarros", "Entre 11 e 20 cigarros", "Entre 21 e 30 cigarros", "Mais de 30 cigarros"]
					}
				}
			},
			{
				"condition": "smoker",
				"condition_type": "=",
				"Sim": {
					"text": "<p>Você fuma mais freqüentemente nas primeiras horas do dia do que durante o resto do dia?<p>",
					"input": {
						"field": "cigarette_frequency",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Sim", "Não"]
					}
				}
			},
			{
				"condition": "smoker",
				"condition_type": "=",
				"Sim": {
					"text": "<p>Você fuma mesmo estando doente ao ponto de ficar acamado na maior parte do dia?<p>",
					"input": {
						"field": "sic_smoker",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Sim", "Não"]
					}
				}
			},
			{
				"text": "<p>Com que frequência consome bebidas que contêm álcool?<p>",
				"subtext": "Por exemplo: igrejas, local de trabalho, cinemas, shoppings, etc...",
				"input": {
					"field": "drink_frequency",
					"default": [],
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nunca", "Uma vez por mês ou menos", "Duas a quatro vezes por mês", "Duas a três vezes por semanas", "Quatro ou mais vezes por semana"]
				}
			},
			{
				"condition": "drink_frequency",
				"condition_type": "!=",
				"Nunca": {
					"text": "<p>Quando bebe, quantas bebidas contendo álcool consome num dia normal?<p>",
					"input": {
						"field": "qty_drinks_per_day",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Uma ou duas", "Três ou quatro", "Cinco ou seis", "De sete a nove", "Dez ou mais"]
					}
				}
			},
			{
				"condition": "drink_frequency",
				"condition_type": "!=",
				"Nunca": {
					"text": "<p>Com que frequência consome seis bebidas ou mais numa única ocasião?<p>",
					"input": {
						"field": "six_drink_frequency",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Nunca", "Pelo menos uma vez por mês", "Pelo menos uma vez por semana", "Diariamente ou quase diariamente"]
					}
				}
			},
			{
				"condition": "drink_frequency",
				"condition_type": "!=",
				"Nunca": {
					"text": "<p>Nos últimos 12 meses, com que frequência se apercebeu de que não conseguia parar de beber depois de começar?<p>",
					"input": {
						"field": "difficulty_drink_stop_12_months",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Nunca", "Pelo menos uma vez por mês", "Pelo menos uma vez por semana", "Diariamente ou quase diariamente"]
					}
				}
			},
			{
				"condition": "drink_frequency",
				"condition_type": "!=",
				"Nunca": {
					"text": "<p>Nos últimos 12 meses, com que frequência não conseguiu cumprir as tarefas que habitualmente lhe exigem por ter bebido?<p>",
					"input": {
						"field": "difficulty_to_do_tasks_drunk",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Nunca", "Pelo menos uma vez por mês", "Pelo menos uma vez por semana", "Diariamente ou quase diariamente"]
					}
				}
			},
			{
				"condition": "drink_frequency",
				"condition_type": "!=",
				"Nunca": {
					"text": "<p>Nos últimos 12 meses, com que frequência precisou de beber logo de manhã para \"curar\" uma ressaca?<p>",
					"input": {
						"field": "medicine_to_hangover_frequency",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Nunca", "Pelo menos uma vez por mês", "Pelo menos uma vez por semana", "Diariamente ou quase diariamente"]
					}
				}
			},
			{
				"condition": "drink_frequency",
				"condition_type": "!=",
				"Nunca": {
					"text": "<p>Nos últimos 12 meses, com que frequência não se lembrou do que aconteceu na noite anterior por causa de ter bebido?<p>",
					"input": {
						"field": "alcoholic_amnesia_frequency",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Nunca", "Pelo menos uma vez por mês", "Pelo menos uma vez por semana", "Diariamente ou quase diariamente"]
					}
				}
			},
			{
				"condition": "drink_frequency",
				"condition_type": "!=",
				"Nunca": {
					"text": "<p>Já alguma vez ficou ferido ou ficou alguém ferido por você ter bebido?<p>",
					"input": {
						"field": "hurt_by_drinking",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Não", "Sim, mas não nos últimos 12 meses", "Sim, aconteceu nos últimos 12 meses"]
					}
				}
			},
			{
				"condition": "drink_frequency",
				"condition_type": "!=",
				"Nunca": {
					"text": "<p>Já alguma vez um familiar, amigo, médico ou profissional de saúde manifestou preocupação pelo seu consumo de álcool ou sugeriu que deixasse de beber?<p>",
					"input": {
						"field": "concern_for_alcoholism",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Não", "Sim, mas não nos últimos 12 meses", "Sim, aconteceu nos últimos 12 meses"]
					}
				}
			},
			{
				"text": "<p>Durante o último mês, quando você geralmente foi para a cama a noite?<p>",
				"input": {
					"field": "sleeping_time_last_month",
					"default": [],
					"type": "text",
					"placeholder": "Ex: 22:00h",
					"validation_rule": "\\d\\d:\\d\\d"
				}
			},
			{
				"text": "<p>Durante o último mês, quanto tempo (em minutos) você geralmente levou para dormir a noite?<p>",
				"input": {
					"field": "time_to_sleep_in_minutes",
					"default": [],
					"type": "text",
					"placeholder": "Ex: 30 minutos",
					"validation_rule": "\\S"
				}
			},
			{
				"text": "<p>Durante o último mês, quando você geralmente levantou de manhã?<p>",
				"input": {
					"field": "wakeup_time_last_month",
					"default": [],
					"type": "text",
					"placeholder": "Ex: 10:00h",
					"validation_rule": "\\d\\d:\\d\\d"
				}
			},
			{
				"text": "<p>Durante o último mês, com que frequência você teve dificuldade para dormir porque você:<p>",
				"subtext": "Não conseguiu adormecer em até 30 minutos?",
				"input": {
					"field": "difficulty_to_wakeup_time_to_sleep",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
				}
			},
			{
				"text": "<p>Durante o último mês, com que frequência você teve dificuldade para dormir porque você:<p>",
				"subtext": "Acordou no meio da noite ou de manhã cedo?",
				"input": {
					"field": "difficulty_to_wakeup_middle",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
				}
			},
			{
				"text": "<p>Durante o último mês, com que frequência você teve dificuldade para dormir porque você:<p>",
				"subtext": "Precisou levantar para ir ao banheiro?",
				"input": {
					"field": "difficulty_to_wakeup_bathroom",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
				}
			},
			{
				"text": "<p>Durante o último mês, com que frequência você teve dificuldade para dormir porque você:<p>",
				"subtext": "Não conseguiu respirar confortavelmente?",
				"input": {
					"field": "difficulty_to_wakeup_breathing_hard",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
				}
			},
			{
				"text": "<p>Durante o último mês, com que frequência você teve dificuldade para dormir porque você:<p>",
				"subtext": "Tossiu ou roncou forte?",
				"input": {
					"field": "difficulty_to_wakeup_snore",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
				}
			},
			{
				"text": "<p>Durante o último mês, com que frequência você teve dificuldade para dormir porque você:<p>",
				"subtext": "Sentiu muito frio?",
				"input": {
					"field": "difficulty_to_wakeup_interrupted_cold",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
				}
			},
			{
				"text": "<p>Durante o último mês, com que frequência você teve dificuldade para dormir porque você:<p>",
				"subtext": "Sentiu muito calor?",
				"input": {
					"field": "difficulty_to_wakeup_hot",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
				}
			},
			{
				"text": "<p>Durante o último mês, com que frequência você teve dificuldade para dormir porque você:<p>",
				"subtext": "Teve sonhos ruins?",
				"input": {
					"field": "difficulty_to_wakeup_nightmare",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
				}
			},
			{
				"text": "<p>Durante o último mês, com que frequência você teve dificuldade para dormir porque você:<p>",
				"subtext": "Teve dor?",
				"input": {
					"field": "difficulty_to_wakeup_pain",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
				}
			},
			{
				"text": "<p>Durante o último mês como você classificaria a qualidade do seu sono de uma maneira geral?<p>",
				"input": {
					"field": "sleep_quality",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Muito boa", "Boa", "Ruim", "Muito ruim"]
				}
			},
			{
				"text": "<p>No último mês, que frequencia você teve dificuldade para ficar acordado enquanto dirigia, comia ou participava de uma atividade social?<p>",
				"subtext": "Ex: festa, reunião de amigos",
				"input": {
					"field": "difficulty_staying_awake_driving",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
				}
			},
			{
				"text": "<p>Durante o último mês, quão problemático foi pra você manter o entusiasmo (ânimo) para fazer as coisas (suas atividades habituais)?<p>",
				"subtext": "Ex: festa, reunião de amigos",
				"input": {
					"field": "enthusiasm",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhuma dificuldade", "Um problema leve", "Um problema razoável", "Um grande problema"]
				}
			},
			{
				"text": "<p>Você tem um parceiro (a), esposo (a) ou colega de quarto?<p>",
				"input": {
					"field": "have_a_partner",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não", " Parceiro ou colega, mas em outro quarto", "Parceiro no mesmo quarto, mas em outra cama", "Parceiro na mesma cama"]
				}
			},
			{
				"condition": "have_a_partner",
				"condition_type": "!=",
				"Não": {
					"text": "<p>Se você tem um parceiro ou colega de quarto pergunte a ele com que freqüência, no último mês você apresentou:<p>",
					"subtext": "Ronco forte?",
					"input": {
						"field": "partner_snore",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
					}
				}
			},
			{
				"condition": "have_a_partner",
				"condition_type": "!=",
				"Não": {
					"text": "<p>Se você tem um parceiro ou colega de quarto pergunte a ele com que freqüência, no último mês você apresentou:<p>",
					"subtext": "Longas paradas de respiração enquanto dormia?",
					"input": {
						"field": "partner_apnea",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
					}
				}
			},
			{
				"condition": "have_a_partner",
				"condition_type": "!=",
				"Não": {
					"text": "<p>Se você tem um parceiro ou colega de quarto pergunte a ele com que freqüência, no último mês você apresentou:<p>",
					"subtext": "Contrações ou puxões de pernas enquanto dormia?",
					"input": {
						"field": "partner_spasms",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
					}
				}
			},
			{
				"condition": "have_a_partner",
				"condition_type": "!=",
				"Não": {
					"text": "<p>Se você tem um parceiro ou colega de quarto pergunte a ele com que freqüência, no último mês você apresentou:<p>",
					"subtext": "Episodios de desorientação ou confusão durante o sono?",
					"input": {
						"field": "partner_disorientation",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
					}
				}
			},
			{
				"condition": "have_a_partner",
				"condition_type": "!=",
				"Não": {
					"text": "<p>Se você tem um parceiro ou colega de quarto pergunte a ele com que freqüência, no último mês você apresentou:<p>",
					"subtext": "Episodios de desorientação ou confusão durante o sono?",
					"input": {
						"field": "partner_disorientation",
						"type": "radio",
						"validation_rule": "\\S",
						"options": ["Nenhuma no último mês", "Menos de 1 vez por semana", "1 ou 2 vezes por semana", "3 ou mais vezes na semana"]
					}
				}
			},
			{
				"text": "<p>Ao responder às questões considere apenas as atividades físicas que realize durante pelo menos 10 minutos seguidos.<p>"
			},
			{
				"text": "<p>Habitualmente, por semana, quantos dias faz atividades físicas vigorosas como levantar e/ou transportar objectos pesados, cavar, ginástica aeróbica ou andar de bicicleta a uma velocidade acelerada?<p>",
				"input": {
					"field": "physical_activity_vigorous_frequency",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhum dia por semana", "1 à 7 dias por semana"]
				}
			},
			{
				"text": "<p>Normalmente, por semana, quantos dias faz atividade física moderada como levantar e/ou transportar objetos leves, andar de bicicleta a uma velocidade moderada ou jogar ténis? (Não inclua o andar/caminhar).<p>",
				"input": {
					"field": "physical_activity_moderate_frequency",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhum dia por semana", "1 à 7 dias por semana"]
				}
			},
			{
				"text": "<p>Habitualmente, por semana, quantos dias caminha durante pelo menos 10 minutos seguidos?<p>",
				"subtext": "Inclua caminhadas para o trabalho e para casa, para se deslocar de um lado para outro e qualquer outra caminhada que possa fazer somente para recreação, desporto ou lazer.",
				"input": {
					"field": "walking_frequency",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhum dia por semana", "1 à 7 dias por semana"]
				}
			},
			{
				"text": "As últimas questões referem-se ao tempo que está sentado diariamente no trabalho, em casa, no percurso para o trabalho e durante os tempos livres. Estas questões incluem o tempo em que está sentado numa secretária, a visitar amigos, a ler ou sentado/deitado a ver televisão."
			},
			{
				"text": "<p>Quanto tempo costuma estar sentado num dia de semana?<p>",
				"input": {
					"field": "sitting_time",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Nenhum tempo", "Mais de 30 minutos"]
				}
			}
		]
	},
	{
		"number": "04",
		"title": "Saúde Mental",
		"progress_color": "#2A2F6E",
		"questions": [
			{
				"text": "<p>No geral como você classifica a sua saúde mental agora?<p>",
				"input": {
					"field": "mental_health_level",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Muito ruim", "Ruim", "Muito boa", "Excelente"]
				}
			},
			{
				"text": "<p>Por favor, leia cada afirmativa e marque uma das alternativas que indique quando a afirmativa aconteceu a você na última semana. <p>",
				"subtext": "Não há respostas certas ou erradas. Não gaste muito tempo em nenhuma das afirmativas"
			},
			{
				"text": "<p>No geral como você classifica a sua saúde mental agora?<p>",
				"input": {
					"field": "difficulty_to_calm_down",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu percebi que estava com a boca seca</p>",
				"input": {
					"field": "dry_mouth",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu não conseguia ter sentimentos positivos</p>",
				"input": {
					"field": "cant_have_positive_feelings",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu tive dificuldade para respirar</p>",
				"subtext": "(por exemplo, tive respiração muito rápida, ou falta de ar sem ter feito esforço físico)",
				"input": {
					"field": "difficulty_breathing_mental_health",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Foi difícil ter iniciativa para fazer as coisas</p>",
				"input": {
					"field": "initiative_to_do_something",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Em geral, tive reações exageradas às situações</p>",
				"input": {
					"field": "exaggerated_reactions",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Tive tremores</p>",
				"input": {
					"field": "tremors",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu senti que estava bastante nervoso(a)</p>",
				"input": {
					"field": "nervous",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu fiquei preocupado(a) com situações em que poderia entrar em pânico e fazer papel de bobo(a)</p>",
				"input": {
					"field": "panic",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu senti que não tinha expectativas positivas a respeito de nada</p>",
				"input": {
					"field": "positive_expectations",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Notei que estava ficando agitado(a)</p>",
				"input": {
					"field": "hectic",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Achei difícil relaxar</p>",
				"input": {
					"field": "relax",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu me senti abatido(a) e triste</p>",
				"input": {
					"field": "sad",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu não tive paciência com coisas que interromperam o que estava fazendo</p>",
				"input": {
					"field": "patience",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu senti que estava prestes a entrar em pânico</p>",
				"input": {
					"field": "about_to_panic",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Não consegui me empolgar com nada</p>",
				"input": {
					"field": "dont_get_excited",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu senti que não tinha muito valor como pessoa</p>",
				"input": {
					"field": "value_as_a_person",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu senti que eu estava muito irritado(a)</p>",
				"input": {
					"field": "irritated",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu percebi as batidas do meu coração mais aceleradas sem ter feito esforço físico</p>",
				"subtext": "(por exemplo, a sensação de aumento dos batimentos cardíacos, ou de que o coração estava batendo fora do ritmo)",
				"input": {
					"field": "accelerated_heart",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu me senti assustado(a) sem ter motivo</p>",
				"input": {
					"field": "scared",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			},
			{
				"text": "<p>Eu senti que a vida não tinha sentido</p>",
				"input": {
					"field": "not_sense_life",
					"type": "radio",
					"validation_rule": "\\S",
					"options": ["Não aconteceu comigo nessa semana", "Aconteceu comigo algumas vezes na semana", "Aconteceu comigo em boa parte da semana", "Aconteceu comigo na maior parte do tempo da semana"]
				}
			}
		]
	}
]