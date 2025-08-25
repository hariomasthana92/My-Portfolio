import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Users, Target, Award, TrendingUp, Code, Zap } from 'lucide-react';

const achievements = [
  {
    title: "AIR 1886 AINCAT",
    description: "Secured top 0.41% nationwide ranking in All India National Common Admission Test, demonstrating exceptional analytical and problem-solving capabilities.",
    icon: Trophy,
    stats: "0.41%",
    metric: "Percentile",
    year: "2023",
    category: "Academic Excellence",
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-500/10 to-orange-500/10"
  },
  {
    title: "5-Star HackerRank",
    description: "Achieved 5-star rating in Problem Solving on HackerRank platform, showcasing strong algorithmic thinking and coding proficiency.",
    icon: Star,
    stats: "5★",
    metric: "Rating",
    year: "2023",
    category: "Competitive Programming",
    color: "from-blue-500 to-purple-500",
    bgColor: "from-blue-500/10 to-purple-500/10"
  },
  {
    title: "LeetCode Mastery",
    description: "Solved 700+ algorithmic problems across various difficulty levels, demonstrating consistent practice in data structures and algorithms.",
    icon: Target,
    stats: "700+",
    metric: "Problems",
    year: "Ongoing",
    category: "Problem Solving",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "Tech Presentation",
    description: "Delivered impactful technical presentation to audience of 2000+ attendees, showcasing communication and leadership skills.",
    icon: Users,
    stats: "2000+",
    metric: "Audience",
    year: "2023",
    category: "Leadership",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-500/10 to-rose-500/10"
  }
];

export function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background dark:bg-background" ref={ref}>
      {/* Simple Background - Pattern A */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block relative"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent mb-6">
              ACHIEVEMENTS
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Recognition and milestones in technical excellence
          </motion.p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
                className="group cursor-pointer"
              >
                <div className="card-glow h-full p-8 rounded-3xl backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 border border-white/40 dark:border-gray-700/40 hover:border-white/60 dark:hover:border-gray-600/60 transition-all duration-500 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Header with Icon and Category */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {achievement.title}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium">
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Display */}
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.stats}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {achievement.metric}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                            {achievement.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      {achievement.description}
                    </p>

                    {/* Progress Bar Animation */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          Achievement Progress
                        </span>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          100%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: "100%" } : {}}
                          transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                          className={`h-full bg-gradient-to-r ${achievement.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: [0, 0.5, 0] }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-gray-700/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="w-12 h-12 mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center"
              >
                <Trophy className="w-6 h-6 text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Major Awards</div>
            </div>
            
            <div className="space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center"
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5★</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Max Rating</div>
            </div>
            
            <div className="space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center"
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">700+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Problems Solved</div>
            </div>
            
            <div className="space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="w-12 h-12 mx-auto bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center"
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">0.41%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Top Percentile</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex justify-center mt-20"
        >
          <div className="flex space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
