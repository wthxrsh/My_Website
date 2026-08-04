import { ExperienceItem, Project, SkillGroup } from "./types";

export const titles: string[] = [
  "Software Engineer",
  "Backend Developer",
  "Distributed Systems Enthusiast",
  "Assistant Systems Engineer Trainee @ TCS",
];

export const heroSummary =
  "I enjoy building scalable backend systems, distributed services, and cloud-native applications. I'm currently focused on Java, Spring Boot, PostgreSQL, Redis, Kafka, Docker, and AWS.";

export const aboutParagraphs: string[] = [
  "I'm a backend-focused engineer who likes systems that stay correct under load. Most of my time goes into designing APIs, modeling data, and understanding how services fail before they actually do.",
  "Right now I'm learning how distributed systems handle consistency, replication, and failure — moving past single-service thinking into how Kafka, caching layers, and container orchestration fit together in production.",
  "Long term, I want to become the kind of engineer teams trust with the parts of a system that are hard to see and easy to get wrong: data consistency, service boundaries, and infrastructure that holds up under real traffic.",
];

export const interests: string[] = [
  "Backend Engineering",
  "Distributed Systems",
  "Cloud",
  "Linux",
  "Architect",
  "Learner",
];

export const skillGroups: SkillGroup[] = [
  { category: "Programming", items: ["Java", "SQL", "C++"] },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "REST APIs",
      "Spring Data JPA",
      "Hibernate",
      "Microservices",
    ],
  },
  { category: "Database", items: ["PostgreSQL", "Redis", "MySQL"] },
  { category: "Cloud", items: ["AWS", "Docker", "Kubernetes"] },
  { category: "Messaging", items: ["Apache Kafka"] },
  {
    category: "Core CS",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "System Design",
    ],
  },
  { category: "Tools", items: ["Git", "Maven", "Linux", "IntelliJ IDEA", "Postman"] },
];

export const experience: ExperienceItem[] = [
  {
    role: "Backend Developer",
    org: "Independent Projects",
    period: "Ongoing",
    description:
      "Designing and building backend-heavy side projects — API design, data modeling, and distributed systems patterns — to work through problems production systems actually face.",
    status: "current",
  },
  {
    role: "Assistant Systems Engineer Trainee",
    org: "Tata Consultancy Services",
    period: "2026",
    description:
      "Joining TCS as an Assistant Systems Engineer Trainee, starting a full-time engineering role focused on backend systems.",
    status: "incoming",
  },
];

export const projects: Project[] = [
  {
    slug: "distributed-url-shortener",
    name: "Distributed URL Shortener",
    description:
      "A URL shortening service built to handle high write/read throughput, with a distributed ID generation strategy, caching layer for hot redirects, and horizontal scalability in mind.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/harshshah/distributed-url-shortener",
  },
  {
    slug: "event-driven-ecommerce-backend",
    name: "Event-Driven E-Commerce Backend",
    description:
      "An e-commerce backend built around asynchronous, event-driven communication between services — order, inventory, and notification flows decoupled through a message broker instead of direct calls.",
    stack: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/harshshah/event-driven-ecommerce-backend",
  },
  {
    slug: "distributed-object-storage-service",
    name: "Distributed Object Storage Service",
    description:
      "A simplified object storage system exploring how services like S3 work under the hood — chunking, replication across nodes, and metadata management for durability and availability.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "System Design"],
    githubUrl: "https://github.com/harshshah/distributed-object-storage-service",
  },
];
