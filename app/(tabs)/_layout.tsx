import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: useClientOnlyValue(false, true),
            }}>

            {/* Explore Tab */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => <TabBarIcon name="globe" color={color} />, // Icon for exploration
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="plus-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />

            {/* Study Mode Tab */}
            <Tabs.Screen
                name="studymode"
                options={{
                    title: 'Study Mode',
                    tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />, // Icon for studying
                }}
            />

            {/* Question AI Tab */}
            <Tabs.Screen
                name="questionai"
                options={{
                    title: 'Question AI',
                    tabBarIcon: ({ color }) => <TabBarIcon name="lightbulb-o" color={color} />, // Icon for AI assistance
                }}
            />

            {/* My Account Tab */}
            <Tabs.Screen
                name="account"
                options={{
                    title: 'My Account',
                    tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />, // Icon for user profile
                }}
            />
        </Tabs>
    );
}
