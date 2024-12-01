export function getServiceData(dictionnary: any) {
	const serviceData1 = {
		label: 'Mobile App',
		title: 'Fonctionnalités Puissantes pour Commercialiser votre IA',
		description:
			"Transformez votre modèle d'IA en produit SaaS professionnel grâce à notre plateforme complète et personnalisable.",
		features: [
			{
				icon: 'material-symbols:offline-pin',
				text: 'Interface Client Personnalisée',
			},
			{
				icon: 'material-symbols:quiz',
				text: 'Gestion des Utilisateurs & Rôles',
			},
			{ icon: 'material-symbols:download', text: 'Tableau de Bord Analytics' },
			{ icon: 'material-symbols:notifications', text: 'API Sécurisée' },
			{
				icon: 'material-symbols:track-changes',
				text: 'Système de Paiement Intégré',
			},
			{ icon: 'material-symbols:message', text: 'Support Technique Dédié' },
		],
		imageSrc: '/fr/aisaas.png',
	};

	const serviceData2 = {
		label: 'Learning Platform',
		title: 'Architecture Technique Robuste',
		description:
			"Bénéficiez d'une infrastructure technique complète et évolutive pour déployer votre modèle d'IA en toute sérénité. Notre architecture cloud native garantit performance, sécurité et fiabilité.",
		features: [
			{ icon: 'material-symbols:school', text: 'Architecture Cloud Native' },
			{
				icon: 'material-symbols:grade',
				text: 'Équilibrage de Charge Automatique',
			},
			{ icon: 'material-symbols:group', text: 'Monitoring en Temps Réel' },
			{ icon: 'material-symbols:schedule', text: 'Sécurité Enterprise-Grade' },
			{ icon: 'material-symbols:analytics', text: 'Scalabilité Dynamique' },
			{ icon: 'material-symbols:support', text: 'Support Technique 24/7' },
		],
		imageSrc: '/fr/aisystems.png',
	};

	return [serviceData1, serviceData2];
}

export function getStepData(dictionnary: any) {
	const steps = [
		{
			number: '01.',
			title: 'Analyse initiale',
			description:
				'Compréhension de vos processus métiers actuels et identification des vrais points de douleur',
		},
		{
			number: '02.',
			title: 'Co-construction',
			description:
				"Définition collaborative des fonctionnalités essentielles et de l'expérience utilisateur pour maximiser la valeur de votre IA",
		},
		{
			number: '03.',
			title: 'Conception sur mesure',
			description:
				"Développement d'une interface utilisateur intuitive et d'une architecture technique robuste adaptée à votre modèle d'IA",
		},
		{
			number: '04.',
			title: 'Déploiement',
			description:
				'Mise en production sécurisée de votre solution avec tests approfondis et monitoring en temps réel',
		},
		{
			number: '05.',
			title: 'Accompagnement',
			description:
				'Support technique continu et optimisation des performances pour assurer la croissance de votre solution',
		},
	];

	return steps;
}

export function getFAQData(dictionnary: any) {
	const faqData = [
		{
			question:
				"Quels avantages offre notre approche de développement SAAS pour l'IA ?",
			answer:
				"Notre approche unique combine expertise technique et vision business. Contrairement aux agences web classiques, nous sommes spécialisés dans la transformation de modèles d'IA en produits commerciaux. Notre plateforme SaaS accélère considérablement le développement tout en garantissant qualité et évolutivité. Vous gagnez 6 à 12 mois de développement et pouvez vous concentrer sur votre expertise IA pendant que nous gérons toute l'infrastructure technique. Notre solution inclut tout le nécessaire : interface utilisateur, gestion des accès, paiements, sécurité et monitoring.",
		},
		{
			question:
				"Comment intégrons-nous votre modèle d'IA dans une solution commerciale complète ?",
			answer:
				"Notre processus d'intégration est conçu pour être simple et efficace. Nous commençons par analyser les spécifications techniques de votre modèle d'IA et vos besoins business. Ensuite, nous développons une API sécurisée pour communiquer avec votre modèle, créons une interface utilisateur intuitive, et mettons en place toute l'infrastructure nécessaire (authentification, paiements, analytics). Notre architecture modulaire permet d'intégrer tout type de modèle d'IA tout en garantissant performances et scalabilité. Le déploiement est progressif avec des phases de test pour assurer une transition en douceur.",
		},
		{
			question:
				'Quelles garanties techniques et sécurité offrons-nous pour votre solution ?',
			answer:
				'La sécurité et la fiabilité sont au cœur de notre approche. Notre infrastructure est construite sur des standards enterprise-grade : chiffrement de bout en bout, authentification multi-facteurs, monitoring 24/7, sauvegardes automatiques, et conformité RGPD. Nous effectuons des audits de sécurité réguliers et suivons les meilleures pratiques du secteur. Notre architecture cloud native assure une disponibilité optimale et peut gérer des pics de charge importants. De plus, nous fournissons des tableaux de bord détaillés pour suivre les performances et la sécurité en temps réel.',
		},
		{
			question:
				"En combien de temps votre modèle d'IA peut-il être mis sur le marché ?",
			answer:
				"Notre approche standardisée et notre plateforme éprouvée nous permettent d'être très efficaces. Pour une solution standard, le délai typique est de 8 à 12 semaines entre le début du projet et la mise en production. Ce délai se décompose en : 2 semaines d'analyse et spécifications, 4-6 semaines de développement, 2 semaines de tests et optimisation, et 1-2 semaines de déploiement progressif. Pour des projets plus complexes, nous définissons un planning précis lors de la phase d'analyse. Notre objectif est toujours de vous faire gagner plusieurs mois par rapport à un développement traditionnel.",
		},
		{
			question:
				"Comment personnalisons-nous l'interface et l'expérience utilisateur pour vos clients ?",
			answer:
				"La personnalisation est essentielle pour le succès commercial de votre solution. Notre processus de design commence par une analyse approfondie de vos utilisateurs finaux et de leurs besoins. Nous créons des interfaces sur mesure qui reflètent votre marque et optimisent l'utilisation de votre IA. Nos interfaces sont responsives (mobile et desktop) et peuvent s'adapter à différents contextes d'utilisation. Nous incluons des fonctionnalités avancées comme la personnalisation des rapports, les tableaux de bord configurables, et différents niveaux d'accès selon les profils utilisateurs. Chaque élément est testé pour garantir une expérience utilisateur optimale.",
		},
	];

	return faqData;
}
