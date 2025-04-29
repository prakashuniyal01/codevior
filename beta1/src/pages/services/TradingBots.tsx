
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LineChart, BarChart3, TrendingUp, DollarSign, Bitcoin, Layers } from 'lucide-react';
import ThreeDSection from '@/components/three/ThreeDSection';
import DataSphere from '@/components/three/models/DataSphere';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

const TradingBots = () => {
  const navigate = useNavigate();
  
  const botTypes = [
    {
      id: "trend",
      title: "Trend-Following Bots",
      description: "Bots that identify and capitalize on market trends by analyzing momentum and directional movements.",
      icon: <TrendingUp size={40} />,
      features: [
        "Multiple timeframe analysis",
        "Dynamic trend identification",
        "Momentum-based entry and exit",
        "Trailing stop-loss mechanisms",
        "Position sizing optimization",
        "Real-time trend shift alerts"
      ],
      color: '#7E69AB'
    },
    {
      id: "arbitrage",
      title: "Arbitrage Bots",
      description: "Bots that exploit price differences of the same asset across different exchanges or markets.",
      icon: <BarChart3 size={40} />,
      features: [
        "Cross-exchange price monitoring",
        "Low-latency execution",
        "Transaction cost optimization",
        "Risk management algorithms",
        "Simultaneous order execution",
        "Liquidity analysis"
      ],
      color: '#6E59A5'
    },
    {
      id: "market",
      title: "Market Making Bots",
      description: "Bots that provide liquidity to markets by placing buy and sell orders, profiting from the spread.",
      icon: <DollarSign size={40} />,
      features: [
        "Dynamic spread management",
        "Order book analysis",
        "Automated rebalancing",
        "Volatility-based adjustments",
        "Smart inventory management",
        "Risk exposure controls"
      ],
      color: '#9b87f5'
    },
    {
      id: "sentiment",
      title: "Sentiment Analysis Bots",
      description: "Bots that analyze news, social media, and market sentiment to make trading decisions.",
      icon: <LineChart size={40} />,
      features: [
        "Real-time news monitoring",
        "Social media sentiment analysis",
        "NLP-powered text processing",
        "Sentiment score calculations",
        "Event-based trading signals",
        "Market correlation tracking"
      ],
      color: '#8B5CF6'
    }
  ];
  
  const exchanges = [
    {
      name: "Binance",
      description: "The world's largest cryptocurrency exchange by trading volume.",
      features: ["Spot Trading", "Futures", "Options", "Staking", "NFT Marketplace"],
      logo: <Bitcoin className="w-16 h-16 text-primary" />
    },
    {
      name: "Coinbase",
      description: "A secure platform that makes it easy to buy, sell, and store cryptocurrency.",
      features: ["Spot Trading", "Institutional Services", "Crypto Custody", "Educational Resources"],
      logo: <Bitcoin className="w-16 h-16 text-primary" />
    },
    {
      name: "Kraken",
      description: "A feature-rich cryptocurrency exchange with strong security focus.",
      features: ["Spot Trading", "Margin Trading", "Futures", "OTC Services", "Staking"],
      logo: <Bitcoin className="w-16 h-16 text-primary" />
    },
    {
      name: "FTX",
      description: "Innovative derivatives exchange offering unique crypto products.",
      features: ["Spot Trading", "Futures", "Options", "Leveraged Tokens", "Prediction Markets"],
      logo: <Bitcoin className="w-16 h-16 text-primary" />
    }
  ];
  
  const features = [
    {
      title: "Automated Trading 24/7",
      description: "Our bots operate around the clock, never missing a trading opportunity.",
      icon: <Layers size={24} />
    },
    {
      title: "Advanced Risk Management",
      description: "Built-in safeguards to protect your capital during volatile market conditions.",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Data-Driven Strategies",
      description: "Trading decisions based on comprehensive market data analysis.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Multi-Exchange Support",
      description: "Connect and trade across multiple cryptocurrency exchanges simultaneously.",
      icon: <Bitcoin size={24} />
    },
    {
      title: "Custom Strategy Builder",
      description: "Create and backtest your own trading strategies using our intuitive interface.",
      icon: <LineChart size={24} />
    },
    {
      title: "Secure API Integration",
      description: "Safe connection to exchanges using read-only API keys with enhanced security.",
      icon: <DollarSign size={24} />
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <>
      <ThreeDSection
        title="Crypto Trading Bots"
        description="Automated trading solutions for cryptocurrency markets, designed to execute strategies 24/7 with precision and efficiency."
        background="gradient"
      >
        <DataSphere position={[0, 0, 0]} radius={3.5} count={2500} color="#7E69AB" interactive={false} />
      </ThreeDSection>
      
      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-4">
            Key Features
          </h2>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our trading bots come equipped with powerful features designed for optimal performance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-lg hover:shadow-lg transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bot Types */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-4">
            Types of Trading Bots
          </h2>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            We develop different types of trading bots to match your trading style and goals
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {botTypes.map((bot, index) => (
              <motion.div
                key={bot.id}
                className="glass p-8 rounded-xl hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-6">
                  <div className="mr-6">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center" 
                      style={{ backgroundColor: `${bot.color}20` }}
                    >
                      <div className="text-primary">
                        {bot.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{bot.title}</h3>
                    <p className="text-muted-foreground">{bot.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {bot.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + index * 0.1 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Exchange Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-4">
            Supported Exchanges
          </h2>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our trading bots integrate seamlessly with leading cryptocurrency exchanges
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exchanges.map((exchange, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-lg flex items-start hover:shadow-lg transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mr-6">
                  {exchange.logo}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{exchange.name}</h3>
                  <p className="text-muted-foreground mb-4">{exchange.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exchange.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-primary/10 rounded-full">{feature}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            A simple process to get your custom trading bot up and running
          </p>
          
          <div className="relative">
            {/* Process timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 hidden md:block"></div>
            
            <motion.div 
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Step 1 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-2">1. Strategy Consultation</h3>
                    <p className="text-muted-foreground">
                      We work with you to understand your trading goals, risk tolerance, and preferred strategies.
                    </p>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    1
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Trading Style Assessment</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Risk Management Planning</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Strategy Selection</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center md:justify-end">
                          <span>Strategy Implementation</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <span>Custom Indicators</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <span>Risk Controls</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-0 md:order-2">
                    <h3 className="text-2xl font-bold mb-2">2. Bot Development</h3>
                    <p className="text-muted-foreground">
                      Our team develops a custom trading bot tailored to your specific requirements and strategy.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-2">3. Backtesting</h3>
                    <p className="text-muted-foreground">
                      We test the bot against historical market data to validate the strategy and optimize performance.
                    </p>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    3
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Historical Performance Analysis</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Strategy Optimization</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Risk/Reward Analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center md:justify-end">
                          <span>Paper Trading Setup</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <span>Performance Monitoring</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <span>Final Adjustments</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-0 md:order-2">
                    <h3 className="text-2xl font-bold mb-2">4. Paper Trading</h3>
                    <p className="text-muted-foreground">
                      The bot is deployed in a simulated environment to verify its performance with real-time market data.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 5 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-2">5. Live Deployment</h3>
                    <p className="text-muted-foreground">
                      After successful testing, we deploy the bot to your exchange accounts with secure API connections.
                    </p>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    5
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Secure API Configuration</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Live Trading Setup</span>
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>Monitoring Dashboard Setup</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 6 */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                    <div className="glass p-6 rounded-lg">
                      <ul className="space-y-2">
                        <li className="flex items-center md:justify-end">
                          <span>24/7 Monitoring</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <span>Performance Reports</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <span>Strategy Adjustments</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary ml-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white justify-center items-center font-bold z-10">
                    6
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-0 md:order-2">
                    <h3 className="text-2xl font-bold mb-2">6. Continuous Support</h3>
                    <p className="text-muted-foreground">
                      We provide ongoing support and periodic strategy optimizations to ensure your bot performs optimally.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold gradient-text text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="glass p-6 rounded-xl">
              <AccordionItem value="item-1" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  Are crypto trading bots profitable?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Trading bots can be profitable when properly configured with effective strategies and risk management. However, performance varies based on market conditions, the quality of the strategy, and how well the bot is maintained. While bots offer advantages like 24/7 operation and emotional neutrality, they are not guaranteed to generate profits. We focus on developing well-tested strategies tailored to your risk profile, but all trading involves risk, and past performance isn't indicative of future results.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  How secure are your trading bots?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Security is our top priority. Our bots connect to exchanges using API keys with trading-only permissions (no withdrawal access). We employ industry-standard encryption for data transmission and storage, regular security audits, and multi-factor authentication for accessing bot controls. Our systems are hosted on secure cloud infrastructure with redundancy and backup systems. Additionally, we implement various safeguards to protect against unexpected market conditions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  What's the minimum investment needed?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The minimum recommended investment varies depending on the trading strategy and the exchanges you're using. Generally, we recommend starting with at least $5,000 to ensure that transaction fees don't significantly impact your returns. Some strategies, particularly those involving futures or margin trading, may require higher capital. During our consultation, we'll provide specific recommendations based on your chosen strategy and risk tolerance.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-border/40">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  How are your bots different from others on the market?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our trading bots stand out through customization, robust risk management, and comprehensive support. Unlike generic solutions, we develop bots tailored to your specific trading goals and risk profile. Our advanced risk management algorithms provide multiple layers of protection against sudden market moves. We offer continuous support with regular strategy reviews and optimization. Additionally, our bots feature advanced technical analysis capabilities and can adapt to changing market conditions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  Do I need technical knowledge to use your bots?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No technical knowledge is required. We handle all the development, deployment, and maintenance aspects. You'll receive an intuitive dashboard to monitor performance and make basic adjustments. Our team provides comprehensive onboarding and training to help you understand how your bot works and how to interpret its performance. For clients interested in a deeper understanding, we offer additional educational resources about trading strategies and bot functionality.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="glass rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold gradient-text mb-6">
              Ready to Automate Your Crypto Trading?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our trading bots can help you trade more efficiently across multiple markets.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')}>
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TradingBots;
